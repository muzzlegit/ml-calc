//--- Комплект Мститель
const kit = {
  kit: {
    setTitle: "Мститель",
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
        title: "Комплект Мститель",
      },
    ],
  },
  back: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Плащ подкупа",
    place: "back",
    twoHanded: false,
    set: "Мститель",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  armor: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Иссеченная бригантина",
    place: "armor",
    twoHanded: false,
    set: "Мститель",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "fraction",
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
          title: "Иссеченная бригантина",
          property: "healthRate",
          valueIndex: 0,
          value: [0.4, 0.48],
          description: [
            "Здоровье всех войск +40%&В бою против вражеской фракции",
            "Здоровье всех войск +48%&В бою против вражеской фракции",
          ],
          battle: true,
        },
      ],
      perfect: [
        {
          title: "Иссеченная бригантина",
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
          title: "Иссеченная бригантина",
          property: "healthRate",
          valueIndex: 0,
          value: [0.09],
          description: ["Здоровье всех войск +9%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  ring: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Перстень мстителя",
    place: "ring",
    twoHanded: false,
    set: "Мститель",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "fraction",
          targetType: "unit",
          units: ["healer"],
          title: "Перстень мстителя",
          property: "resurrectionRate",
          valueIndex: 0,
          value: [-0.45, -0.54],
          description: [
            "Целители воскрешают -45%&В бою против вражеской фракции&Действует на противника",
            "Целители воскрешают -54%&В бою против вражеской фракции&Действует на противника",
          ],
          battle: true,
        },
      ],
      perfect: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "magicTower",
          units: null,
          title: "Перстень мстителя",
          property: "damageRate",
          valueIndex: 0,
          value: [0.15],
          description: ["Атака магических башен +15%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  head: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Личина кровника",
    place: "head",
    twoHanded: false,
    set: "Мститель",
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
          title: "Личина кровника",
          property: "damageRate",
          valueIndex: 0,
          value: [1],
          description: ["Атака башен +100%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  bag: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Латница дуэлянта",
    place: "bag",
    twoHanded: false,
    set: "Мститель",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "fraction",
          targetType: "player",
          units: null,
          title: "Латница дуэлянта",
          property: "experience",
          valueIndex: 0,
          value: [2, 2.4],
          description: [
            "Получаемый героем опыт в бою +200%&В бою против вражеской фракции",
            "Получаемый героем опыт в бою +240%&В бою против вражеской фракции",
          ],
          battle: true,
        },
      ],
      perfect: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "player",
          units: null,
          title: "Латница дуэлянта",
          property: "experience",
          valueIndex: 0,
          value: [1.5],
          description: ["Получаемый героем опыт в бою +150%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  rightHand: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Гвизарма мстителя",
    place: "rightHand",
    twoHanded: true,
    set: "Мститель",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "fraction",
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
          title: "Гвизарма мстителя",
          property: "attackRate",
          valueIndex: 0,
          value: [0.4, 0.48],
          description: [
            "Атака всех войск +40%&В бою против вражеской фракции",
            "Атака всех войск +48%&В бою против вражеской фракции",
          ],
          battle: true,
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
          title: "Гвизарма мстителя",
          property: "attackRate",
          valueIndex: 0,
          value: [-0.09],
          description: ["Атака наемников -9%"],
          battle: true,
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
          title: "Гвизарма мстителя",
          property: "defenseLevel",
          valueIndex: 0,
          value: [3],
          description: ["Предел максимальной защиты +3"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  boots: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Сабатоны отмщения",
    place: "boots",
    twoHanded: false,
    set: "Мститель",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "fraction",
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
          title: "Сабатоны отмщения",
          property: "defense",
          valueIndex: 0,
          value: [40, 48],
          description: [
            "Защита всех войск +40&В бою против вражеской фракции",
            "Защита всех войск +48&В бою против вражеской фракции",
          ],
          battle: true,
        },
      ],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  neck: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Кровавая метка",
    place: "neck",
    twoHanded: false,
    set: "Мститель",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "unit",
          units: ["mercenary"],
          title: "Кровавая метка",
          property: "attackRate",
          valueIndex: 0,
          value: [0.35, 0.42],
          description: ["Атака Наемников +35%", "Атака Наемников +42%"],
          battle: true,
        },
      ],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  pants: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Штаны Мстителя",
    place: "pants",
    twoHanded: false,
    set: "Мститель",
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
          title: "Штаны Мстителя",
          property: "defense",
          valueIndex: 0,
          value: [9],
          description: ["Защита всех войск +9"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  belt: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Ремень бретера",
    place: "belt",
    twoHanded: false,
    set: "Мститель",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  bracers: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Наручи кровавой мести",
    place: "bracers",
    twoHanded: false,
    set: "Мститель",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "fraction",
          targetType: "unit",
          units: ["swordsman", "cavalier", "flying", "archer"],
          title: "Наручи кровавой мести",
          property: "persecutionRate",
          valueIndex: 0,
          value: [0.4, 0.48],
          description: [
            "Атака всех перследователей +40%&В бою против вражеской фракции",
            "Атака всех перследователей +48%&В бою против вражеской фракции",
          ],
          battle: true,
        },
      ],
      perfect: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "magicTower",
          units: null,
          title: "Наручи кровавой мести",
          property: "damageRate",
          valueIndex: 0,
          value: [-0.06],
          description: ["Атака магических башен -6%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
};

export default Object.values(kit);
