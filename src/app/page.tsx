import QuoteComponent from '@/components/QuoteComponent'
import getRandomQuote from '@/lib/getRandomQuote'

// http://localhost:3000/
const Home = async () => {
  const randomQuote = await getRandomQuote();

  return <QuoteComponent randomQuote={randomQuote} />;
};

export default Home