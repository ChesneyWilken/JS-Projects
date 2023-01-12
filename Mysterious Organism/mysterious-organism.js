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

// Generates a 4 digit specimen number
const genSpecimenNum = () => {
  return Math.floor(Math.random() * 1000);
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,

    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      //console.log(randomIndex)
      let newBase = returnRandBase();

      // console.log(newBase)
      // console.log(this.dna[randomIndex] === newBase);

      while (this.dna[randomIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randomIndex] = newBase;
      return this.dna;
    },

    compareDNA(pAequor) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          count++;
        }
      }
      const calcPercent = (count / 15) * 100;

      return `Specimen #${this.specimenNum} and #${
        pAequor.specimenNum
      } have ${calcPercent.toFixed(2)}% DNA in common`;
    },

    willLikelySurvive() {
      let baseCount = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          baseCount++;
        }
      }
      const calcSurvival = (baseCount / 15) * 100;

      if (calcSurvival >= 60) {
        return true;
      } else {
        return false;
      }
    },
  };
};


const pAequorSample = [];

while (pAequorSample.length < 30) {
  let newSpcimen = pAequorFactory(genSpecimenNum(), mockUpStrand());
  if (newSpcimen.willLikelySurvive()) {
    pAequorSample.push(newSpcimen);
  }
}

console.log(pAequorSample);