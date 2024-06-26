//--- Комплект Великий правитель
const kit = {
  kit: {
    setTitle: "Великий правитель",
    level: 3,
    buffs: [
      {
        type: "artefactKit",
        player: null,
        target: "player",
        appliedOn: "all",
        targetType: "player",
        units: null,
        property: "experience",
        valueIndex: 0,
        value: [3],
        description: ["Получаемый героем опыт в бою +300%"],
        battle: true,
        inWork: false,
        title: "Комплект Великий правитель",
      },
    ],
  },
  back: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Накидка изобилия",
    place: "back",
    twoHanded: false,
    set: "Великий правитель",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
  armor: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Купеческий доспех",
    place: "armor",
    twoHanded: false,
    set: "Великий правитель",
    buffs: {
      common: [],
      perfect: [
        {
          title: "Купеческий доспех",
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "fortification",
          units: null,
          property: "damageRate",
          valueIndex: 0,
          value: [1.5],
          description: ["Эффективность уничтожения войск на укреплениях +150%"],
          battle: true,
          inWork: false,
        },
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "unit",
          units: [
            "porter",
            "swordsman",
            "cavalier",
            "flying",
            "archer",
            "healer",
            "mercenary",
            "mage",
          ],
          title: "Купеческий доспех",
          property: "healthRate",
          valueIndex: 0,
          value: [0.09],
          description: ["Здоровье всех войск +9%"],
          battle: true,
          inWork: false,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
  ring: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Кольцо монополиста",
    place: "ring",
    twoHanded: false,
    set: "Великий правитель",
    buffs: {
      common: [],
      perfect: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "magicTower",
          units: null,
          title: "Кольцо монополиста",
          property: "damageRate",
          valueIndex: 0,
          value: [0.15],
          description: ["Атака магических башен +15%"],
          battle: true,
          inWork: false,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
  head: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Шлем великого правителя",
    place: "head",
    twoHanded: false,
    set: "Великий правитель",
    buffs: {
      common: [],
      perfect: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "tower",
          units: null,
          title: "Шлем великого правителя",
          property: "damageRate",
          valueIndex: 0,
          value: [1],
          description: ["Атака башен +100%"],
          battle: true,
          inWork: false,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
  bag: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Золотая держава",
    place: "bag",
    twoHanded: false,
    set: "Великий правитель",
    buffs: {
      common: [],
      perfect: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "player",
          units: null,
          title: "Золотая держава",
          property: "experience",
          valueIndex: 0,
          value: [1.5],
          description: ["Получаемый героем опыт в бою +150%"],
          battle: true,
          inWork: false,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
  rightHand: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Меч великого правителя",
    place: "rightHand",
    twoHanded: false,
    set: "Великий правитель",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "unit",
          units: [
            "swordsman",
            "cavalier",
            "flying",
            "archer",
            "healer",
            "mercenary",
            "mage",
          ],
          title: "Меч великого правителя",
          property: "attackRate",
          valueIndex: 0,
          value: [0.3, 0.36],
          description: ["Атака всех войск +30%", "Атака всех войск +36%"],
          battle: true,
          inWork: false,
        },
      ],
      perfect: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "unit",
          units: ["mercenary"],
          title: "Меч великого правителя",
          property: "attackRate",
          valueIndex: 0,
          value: [-0.09],
          description: ["Атака наемников -9%"],
          battle: true,
          inWork: false,
        },
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "unit",
          units: [
            "porter",
            "swordsman",
            "cavalier",
            "flying",
            "archer",
            "healer",
            "mercenary",
            "mage",
          ],
          title: "Меч великого правителя",
          property: "defenseLevel",
          valueIndex: 0,
          value: [3],
          description: ["Предел максимальной защиты +3"],
          battle: true,
          inWork: false,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
  boots: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Сапоги купцов",
    place: "boots",
    twoHanded: false,
    set: "Великий правитель",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
  neck: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Талисман приисков",
    place: "neck",
    twoHanded: false,
    set: "Великий правитель",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
  leftHand: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Щит великого правителя",
    place: "leftHand",
    twoHanded: false,
    set: "Великий правитель",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "unit",
          units: [
            "porter",
            "swordsman",
            "cavalier",
            "flying",
            "archer",
            "healer",
            "mercenary",
            "mage",
          ],
          title: "Щит великого правителя",
          property: "defense",
          valueIndex: 0,
          value: [30, 36],
          description: ["Защита всех войск +30", "Защита всех войск +36"],
          battle: true,
          inWork: false,
        },
      ],
      perfect: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "unit",
          units: [
            "swordsman",
            "cavalier",
            "flying",
            "archer",
            "healer",
            "mercenary",
            "mage",
          ],
          title: "Щит великого правителя",
          property: "attackRate",
          valueIndex: 0,
          value: [0.09],
          description: ["Атака всех войск +9%"],
          battle: true,
          inWork: false,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
  pants: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Штаны дальней торговли",
    place: "pants",
    twoHanded: false,
    set: "Великий правитель",
    buffs: {
      common: [],
      perfect: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "unit",
          units: [
            "porter",
            "swordsman",
            "cavalier",
            "flying",
            "archer",
            "healer",
            "mercenary",
            "mage",
          ],
          title: "Штаны дальней торговли",
          property: "defense",
          valueIndex: 0,
          value: [9],
          description: ["Защита всех войск +9"],
          battle: true,
          inWork: false,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
  belt: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Сумка великого правителя",
    place: "belt",
    twoHanded: false,
    set: "Великий правитель",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
  bracers: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Наручи инспектора",
    place: "bracers",
    twoHanded: false,
    set: "Великий правитель",
    buffs: {
      common: [],
      perfect: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "magicTower",
          units: null,
          title: "Наручи инспектора",
          property: "damageRate",
          valueIndex: 0,
          value: [-0.06],
          description: ["Атака магических башен -6%"],
          battle: true,
          inWork: false,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
};

export default Object.values(kit);
