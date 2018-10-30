

export class AppareilService {

  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    },
    {
      id: 4,
      name: 'Tv',
      status: 'éteint'
    }
];

    switchOnAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'allumé';
        }
    }
    
    switchOffAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'éteint';
        }
    }


    switchOn(n) {
        console.log('n',n)
        this.appareils[n].status = 'allumé';
        
    }
    
    switchOff() {
          this.appareils[0].status = 'éteint';
        
    }

    getAppareilById(id: number) {
      const appareil = this.appareils.find(
        (s) => {
          return s.id === id;
        }
      );
      return appareil;
  }

  }
  