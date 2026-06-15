import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind className merge utility
 * - clsx: 조건부 class 처리
 * - twMerge: tailwind 충돌 자동 정리
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}