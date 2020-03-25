import * as React from "react";
import { useState, useEffect } from "react";

const Home: React.FC<HomeProps> = () => {
  const [chirps, setChirps] = useState<IChirp[]>([]);

  useEffect(() => {
    (async () => {
      let res = await fetch("/api/chirps");
      let chirps = await res.json();
      setChirps(chirps);
    })();
  }, []);

  return (
    <main className="container">
		<section className="row my-2 justify-content-center">
			{chirps.map(chirp => {
				<h1>{chirp.message}</h1>
			})}
		</section>
	</main>
  );
};

interface IChirp {
  id: string;
  username: string;
  message: string;
}

interface HomeProps {}

export default Home;
