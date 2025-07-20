import { z } from 'zod';

export const customerSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
});

export const segmentationSchema = z.string();

export const subserviceSchema = z.object({
  name: z.string().min(1),
});

export const menuSchema = z.object({
  name: z.string().min(1),
  companyId: z.string().min(1),
  menuUUID: z.string().min(1),
  subservices: z.array(subserviceSchema),
});

export const companieSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  segmentations: z.array(segmentationSchema),
  menus: z.array(menuSchema),
});

export const contextDataSchema = z.object({
  customers: z.array(customerSchema),
  segmentations: z.array(segmentationSchema),
  companies: z.array(companieSchema),
  menus: z.array(menuSchema),
});
