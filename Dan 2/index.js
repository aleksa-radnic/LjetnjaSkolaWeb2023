let studenti = [
    {
        ime: 'Ivan',
        prezime: 'Popovic',
        prosjek: '6.34'
    },
    {
        ime: 'Nikola',
        prezime: 'Markovic',
        prosjek: '9.11'
    },
    {
        ime: 'Maja',
        prezime: 'Stojanovic',
        prosjek: '7.42'
    },
    {
        ime: 'Milica',
        prezime: 'Djordjevic',
        prosjek: '6.45'
    },
    {
        ime: 'Marko',
        prezime: 'Markovic',
        prosjek: '8.72'
    },
    {
        ime: 'Ivan',
        prezime: 'Jovanovic',
        prosjek: '7.89'
    },
    {
        ime: 'Nikola',
        prezime: 'Petrovic',
        prosjek: '7.34'
    },
    {
        ime: 'Petar',
        prezime: 'Markovic',
        prosjek: '6.13'
    },
    {
        ime: 'Sara',
        prezime: 'Stojanovic',
        prosjek: '9.55'
    }
];

for(let student of studenti){
    if(student.prosjek >= 8.50) console.log(student);
}