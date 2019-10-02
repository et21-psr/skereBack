export class Champ {
    id: number;
    name: string;
  }

export class Champ_lol{
  id: string;
  key: string;
  name: string;
  title: string;
  tags: string[];
  stats: {
        hp: number;
        hpperlevel: number;
        mp: number;
        mpperlevel: number;
        movespeed: number;
        armor: number;
        armorperlevel: number;
        spellblock: number;
        spellblockperlevel: number;
        attackrange: number;
        hpregen: number;
        hpregenperlevel: number;
        mpregen: number;
        mpregenperlevel: number;
        crit: number;
        critperlevel: number;
        attackdamage: number;
        attackdamageperlevel: number;
        attackspeedoffset: number;
        attackspeedperlevel: number;
  };
  icon: string;
  sprite: {
    url: string;
    x: number;
    y: number;
  }
  description: string;
}