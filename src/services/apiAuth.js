import { supabase } from "./supabase";

export async function signUpUser() {
  const { data, error } = await supabase.auth.signUp({
    email: "rndsaasproject@gmail.com",
    password: "@Testing",
    options: {
      emailRedirectTo: "http://localhost:5173/home",
    },
  });

  console.log(data, error);
}

export async function signInWithEmail({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) throw error;

  console.log(data);

  return data;
}
