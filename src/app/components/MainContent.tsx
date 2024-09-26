const MainContent = () => {
  return (
    <div className="bg-gradient-to-b from-blue-400 to-purple-500 min-h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <img
          src="https://www.mesopinions.com/public/img/petition/petition-img-153019-fr.webp"
          alt="Profile"
          className="rounded-full w-32 h-32 mx-auto mb-6"
        />
        <h1 className="text-5xl font-bold mb-4">Bienvenue sur mon Portfolio</h1>
        <p className="text-xl mb-6">Je suis un développeur web passionné</p>
        <div>
          <button className="bg-white text-black px-4 py-2 rounded-lg mr-4">
            Voir Projets
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-lg">
            Contactez-moi
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
