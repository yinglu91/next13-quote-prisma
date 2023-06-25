import db from './prisma-db'

export default async function getAllQuotes(): Promise<Quote[]> {
    const results = await db.$queryRaw<Quote[]>`
        SELECT
            quotes.quote,
            authors.author,
            categories.category
        FROM quotes
        JOIN authors ON quotes.author_id = authors.id
        JOIN categories ON quotes.category_id = categories.id
        `
    return results;
  }
  
/*
    const results: Quote[] = [{
      "quote": "We owe a deep debt of gratitude to Adam, the first great benefactor of the human race: he brought death into the world.",
      "author": "Mark Twain",
      "category": "Death"
      }]
*/
  