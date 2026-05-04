import { pgTable, serial, varchar, text, timestamp, integer, json, boolean } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  clerkId: varchar('clerk_id', { length: 256 }).notNull().unique(),
  email: varchar('email', { length: 256 }),
  createdAt: timestamp('created_at').defaultNow(),
});

export const images = pgTable('images', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  prompt: text('prompt').notNull(),
  imageUrl: varchar('image_url', { length: 512 }),
  model: varchar('model', { length: 100 }),
  metadata: json('metadata'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const prompts = pgTable('prompts', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  name: varchar('name', { length: 256 }),
  prompt: text('prompt').notNull(),
  tags: json('tags'),
  forkedFrom: integer('forked_from'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const packs = pgTable('packs', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  description: text('description'),
  price: integer('price'), // cents
  imageCount: integer('image_count'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const packPurchases = pgTable('pack_purchases', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  packId: integer('pack_id').references(() => packs.id),
  stripePaymentId: varchar('stripe_payment_id', { length: 256 }),
  amount: integer('amount'), // cents
  createdAt: timestamp('created_at').defaultNow(),
});

export const generations = pgTable('generations', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  promptId: integer('prompt_id').references(() => prompts.id),
  packId: integer('pack_id').references(() => packs.id),
  status: varchar('status', { length: 50 }).default('pending'), // pending, generating, completed, failed
  imageUrl: varchar('image_url', { length: 512 }),
  metadata: json('metadata'),
  createdAt: timestamp('created_at').defaultNow(),
  completedAt: timestamp('completed_at'),
});

export const remixes = pgTable('remixes', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  originalImageId: integer('original_image_id').references(() => images.id),
  remixedImageId: integer('remixed_image_id').references(() => images.id),
  remixPrompt: text('remix_prompt'),
  createdAt: timestamp('created_at').defaultNow(),
});
