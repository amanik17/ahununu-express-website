-- Migration: Fix search_path security issue in set_user_id_if_missing function
-- This addresses the security vulnerability where the function uses a role-mutable search_path
-- Date: 2026-02-06

-- Drop the existing function if it exists (to ensure clean recreation)
DROP FUNCTION IF EXISTS public.set_user_id_if_missing() CASCADE;

-- Recreate the function with explicit search_path set
CREATE OR REPLACE FUNCTION public.set_user_id_if_missing()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  -- Automatically set user_id to the current authenticated user if not provided
  IF NEW.user_id IS NULL THEN
    NEW.user_id = auth.uid();
  END IF;
  
  RETURN NEW;
END;
$$;

-- Add function comment for documentation
COMMENT ON FUNCTION public.set_user_id_if_missing() IS 
'Trigger function that automatically sets user_id to the authenticated user ID if not provided. 
Uses explicit search_path for security.';

-- Grant execute permission to authenticated users (adjust as needed)
GRANT EXECUTE ON FUNCTION public.set_user_id_if_missing() TO authenticated;

-- Revoke execute from public for security
REVOKE EXECUTE ON FUNCTION public.set_user_id_if_missing() FROM public;