class Etudiant {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }

    afficher() {
        console.log("Nom : "+ this.nom + ", Prenom : " + this.prenom);
        console.log(`
        <div className="App">
            <h1>${this.nom}</h1>
        </div>
      `);
    }
}

export default Etudiant;

// class Stagiaire extends Etudiant {
//     constructor(nom, prenom, code) {
//         super(nom, prenom)
//         this.code = code;
//     }
// }