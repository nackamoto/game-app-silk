"use client";

import { z } from "zod";

export const SigninSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1).max(10),
});

export const RegisterSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(10, "First name must be between 1 and 10 characters"),
  lastName: z.string().min(1).max(10),
  email: z.string().email(),
  phone: z.string().min(1).max(10),
  eduLevel: z.string().min(1).max(10),
  password: z.string().min(1).max(10),
  confirmPassword: z.string().min(1).max(10),
});

export const CampaignSchema = z.object({
  name: z.string().min(1),
  passScore: z.string().min(1),
  duration: z.string().min(1),
  numOfAttempts: z.string().min(1),
});

export const EventSchema = z.object({
  name: z.string().min(1),
  campaign: z.string().min(1),
  startDate: z.string().min(10, "Start date must be at least 10 characters long"),
  endDate: z.string().min(10, "End date must be at least 10 characters long"),
});
