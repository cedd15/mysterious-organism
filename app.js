//DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). 

// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

//array of DNAs
const strand1 = mockUpStrand();
//console.log(strand1);

//function to create multiple objects
function pAequorFactory(num, arrayDNA) {
    return {
        //a number to assign to an organism
        specimenNum: num, 
        //assigns the array of DNAs to dna property
        dna: arrayDNA,
        //a method that changes a DNA base to a new random base
        mutate() {
            //select a random element from the array
            const randomBase = Math.floor(Math.random() * 15);
            //assign a new random value to that element
            this.dna[randomBase] = returnRandBase();
            //returns the mutated array
            return this.dna;
        },
        //a method that compares two pAequor objects
        compareDNA(obj) {
            //we obtain the duplicates of both arrays
            const duplicates = this.dna.filter(element => !obj.dna.indexOf(element));
            //we find the percentage of duplicates
            let duplicatePercentage = Math.floor((duplicates.length / this.dna.length) * 100);
            //
            return `speciment #1 and specimen #2 have ${duplicatePercentage}% in common`;
        },
        //P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases
        //.willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false
        willLikelySurvive() {
          const bases = [];
          //finds all elements that are equal to 'C' or 'G' then push to bases array
          for (let i = 0; i < this.dna.length; i++) {
            if (this.dna[i] === 'C' || this.dna[i] === 'G') {
              bases.push(this.dna[i]);
            }
          }
          //percentage of bases in this.dna array
          const percentage = Math.floor((bases.length / this.dna.length) * 100);
          //check if the organism will survive by returning a boolean value
          //if true, then the organism will likely survive
          return percentage > 60 ? true : false;
        },
    }
}

const Aequor1 = pAequorFactory(1, strand1);
const Aequor2 = pAequorFactory(2, strand1);
console.log(Aequor1.willLikelySurvive());