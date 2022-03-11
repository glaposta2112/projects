// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate () {

      let randomNumber = 0;
      const randomBase = returnRandBase();

        randomNumber = (Math.floor(Math.random() * dna.length));
       
        if (dna[randomNumber] != randomBase) {
          dna[randomNumber] = randomBase;
        }
        else {
          while (dna[randomNumber] === randomBase) {
            randomNumber = (Math.floor(Math.random() * dna.length));
                
            if (dna[randomNumber] != randomBase) {
              dna[randomNumber] = randomBase;
            }
          }
        }
      
      return dna;
    },
    compareDNA (pAequor) {
      let matchBaseCounter = 0;

      const max = this.dna.length > pAequor.dna.length ? pAequor.dna.length : this.dna.length;
      for (let i = 0; i < max; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          matchBaseCounter++;
        }
      }
      
      let matchingPercentage = (matchBaseCounter / this.dna.length) * 100;
      matchingPercentage = matchingPercentage.toFixed(1);

      console.log(`specimen #1 and specimen #2 have ${matchingPercentage}% DNA in common`);
    },
    willLikelySurvive () {
      let cOrGCounter = 0

      for (let i = 0; i < this.dna.length; i++) {
        if ((this.dna[i] === 'C') || (this.dna[i] === 'G')) {
          cOrGCounter++
        }
      }

      const survivalPercentage = (cOrGCounter / this.dna.length) * 100

      if (survivalPercentage >= 60) {
        return true;
      }
      else {
        return false;
      }
    }
  }
};

const allStrands = []
for (let i = 0; i < 30; i++) {
  allStrands.push(pAequorFactory(i, mockUpStrand()));
}
console.log(allStrands);

