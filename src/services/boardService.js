import supabase from "../integrations/supabaseClient";

async function createBoard(boardName) {
  const code = generateBoardCode();
  const { data, error } = await supabase
    .from("Board")
    .insert([
      {
        name: boardName,
        code: code,
      },
    ])
    .select();
  return data;
}

async function getRecentBoards() {
  try {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const { data, error } = await supabase
      .from("Boards")
      .select("*")
      .gte("created_at", oneWeekAgo.toISOString());

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching recent boards:", error.message);
    return [];
  }
}

async function getBoard(boardCode) {
  const { data, error } = await supabase
    .from("Boards")
    .select("*")
    .eq("code", boardCode);
  if (error) {
    console.log("Error Getting Board", error);
    throw new Error(error);
  }
  return data;
}

function generateBoardCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
