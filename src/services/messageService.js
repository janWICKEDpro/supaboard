import supabase from "../integrations/supabaseClient";

async function getMessages(boardId) {
  const { data, error } = await supabase
    .from("Messages")
    .select("*")
    .eq("id", boardId)
    .order("created_at", { ascending: true });
  if (error) {
    console.log("An error occured getting messages", Error);
    throw new Error(error);
  }
}

async function sendMessage(user, boardId, message) {
  const { data, error } = await supabase.from("Messages").insert([
    {
      senderName: user.name,
      boardId: boardId,
      message: message,
      senderId: user.id,
    },
  ]);

  if (error) {
    console.log("An Error occured while sending message");
    throw new Error(error);
  }
}
