import { PiGameController } from "react-icons/pi";
import { supabase } from "./supabase";

export async function signUpUser(userData) {
  const { data, error } = await supabase.auth.signUp({
    email: userData.email,
    password: userData.password,
    options: {
      emailRedirectTo: "http://localhost:5173/home",
      data: {
        first_name: userData.firstName,
        last_name: userData.lastName,
      },
    },
  });

  if (error) throw error;
  console.log(data, error);
}

export async function signInWithEmail({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) throw error;

  return data;
}

export async function getUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw error;

  return user;
}
export async function logOut() {
  const { error } = await supabase.auth.signOut({ scope: "local" });
  console.log(error);

  if (error) throw error;
}

export async function updateProfile({ field, value }) {
  if (!field) throw new Error("Did not provide a field");

  console.log(field, value);

  const updateObj =
    field === "email"
      ? {
          email: value,
        }
      : {
          data: {
            [field]: value,
          },
        };

  const {
    data: { user },
    error,
  } = await supabase.auth.updateUser(updateObj);
  console.error(error);

  if (error) throw error;

  return user;
}

export async function getClaims() {
  const { data, error } = await supabase.auth.getClaims();
  if (error) throw error;

  return data?.claims ?? null;
}
