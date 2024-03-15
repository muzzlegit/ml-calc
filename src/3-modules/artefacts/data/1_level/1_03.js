//--- Эльфийский рейнджер
const kit = {
  kit: {
    level: 1,
    setTitle: "Эльфийский рейнджер",
    buffs: [
      {
        type: "artefactKit",
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
        title: "Комплект Эльфийский рейнджер",
        property: "healthRate",
        valueIndex: 0,
        value: [0.15],
        description: ["Здоровье всех войск +15%"],
        battle: true,
      },
      {
        type: "artefactKit",
        player: null,
        target: "player",
        appliedOn: "all",
        targetType: "player",
        units: null,
        title: "Комплект Эльфийский рейнджер",
        property: "experience",
        valueIndex: 0,
        value: [1],
        description: ["Получаемый героем опыт в бою +100%"],
        battle: true,
      },
    ],
  },
  back: {
    level: 1,
    ancient: false,
    perfect: false,
    title: "Накидка эльфийского рейнджера",
    place: "back",
    twoHanded: false,
    set: "Эльфийский рейнджер",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "forest",
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
          title: "Накидка эльфийского рейнджера",
          property: "attackRate",
          valueIndex: 0,
          value: [-0.1, -0.12],
          description: [
            "Атака всех войск -10% на земле Леса&Действует на противника",
            "Атака всех войск -12% на земле Леса&Действует на противника",
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
  armor: {
    level: 1,
    ancient: false,
    perfect: false,
    title: "Лесная кольчуга",
    place: "armor",
    twoHanded: false,
    set: "Эльфийский рейнджер",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "forest",
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
          title: "Лесная кольчуга",
          property: "healthRate",
          valueIndex: 0,
          value: [0.15, 0.18],
          description: [
            "Здоровье всех войск +15% на земле Леса",
            "Здоровье всех войск +18% на земле Леса",
          ],
          battle: true,
        },
      ],
      perfect: [
        {
          title: "Лесная кольчуга",
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "fortification",
          units: null,
          property: "damageRate",
          valueIndex: 0,
          value: [0.5],
          description: ["Эффективность уничтожения войск на укреплениях +50%"],
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
          title: "Лесная кольчуга",
          property: "healthRate",
          valueIndex: 0,
          value: [0.03],
          description: ["Здоровье всех войск +3%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  ring: {
    level: 1,
    ancient: false,
    perfect: false,
    title: "Деревянный кастет",
    place: "ring",
    twoHanded: false,
    set: "Эльфийский рейнджер",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "forest",
          targetType: "unit",
          units: ["swordsman", "cavalier", "flying", "archer"],
          title: "Деревянный кастет",
          property: "persecutionRate",
          valueIndex: 0,
          value: [0.15, 0.18],
          description: [
            "Атака всех преследователей +15% на земле Леса",
            "Атака всех преследователей +18% на земле Леса",
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
          title: "Деревянный кастет",
          property: "damageRate",
          valueIndex: 0,
          value: [0.05],
          description: ["Атака магических башен +5%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  head: {
    level: 1,
    ancient: false,
    perfect: false,
    title: "Капюшон лесных богов",
    place: "head",
    twoHanded: false,
    set: "Эльфийский рейнджер",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "forest",
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
          title: "Капюшон лесных богов",
          property: "defenseLevel",
          valueIndex: 0,
          value: [10, 12],
          description: [
            "Предел максимальной защиты +10 на земле Леса",
            "Предел максимальной защиты +12 на земле Леса",
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
          targetType: "tower",
          units: null,
          title: "Капюшон лесных богов",
          property: "damageRate",
          valueIndex: 0,
          value: [0.25],
          description: ["Атака башен +25%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  bag: {
    level: 1,
    ancient: false,
    perfect: false,
    title: "Священный клевер",
    place: "bag",
    twoHanded: false,
    set: "Эльфийский рейнджер",
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
          title: "Священный клевер",
          property: "experience",
          valueIndex: 0,
          value: [0.5],
          description: ["Получаемый героем опыт в бою +50%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  rightHand: {
    level: 1,
    ancient: false,
    perfect: false,
    title: "Эльфийский лук",
    place: "rightHand",
    twoHanded: true,
    set: "Эльфийский рейнджер",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "unit",
          units: ["archer"],
          title: "Эльфийский лук",
          property: "attackRate",
          valueIndex: 0,
          value: [0.15, 0.18],
          description: ["Атака Стрелков +15%", "Атака Стрелков +18%"],
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
          title: "Эльфийский лук",
          property: "attackRate",
          valueIndex: 0,
          value: [-0.03],
          description: ["Атака наемников -3%"],
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
          title: "Эльфийский лук",
          property: "defenseLevel",
          valueIndex: 0,
          value: [1],
          description: ["Предел максимальной защиты +1"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  boots: {
    level: 1,
    ancient: false,
    perfect: false,
    title: "Лесные скороходы",
    place: "boots",
    twoHanded: false,
    set: "Эльфийский рейнджер",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  neck: {
    level: 1,
    ancient: false,
    perfect: false,
    title: "Счастье лесоруба",
    place: "neck",
    twoHanded: false,
    set: "Эльфийский рейнджер",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  pants: {
    level: 1,
    ancient: false,
    perfect: false,
    title: "Штаны эльфийской защиты",
    place: "pants",
    twoHanded: false,
    set: "Эльфийский рейнджер",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "forest",
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
          title: "Штаны эльфийской защиты",
          property: "defense",
          valueIndex: 0,
          value: [15, 18],
          description: [
            "Защита всех войск +15 на земле Леса",
            "Защита всех войск +18 на земле Леса",
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
          title: "Штаны эльфийской защиты",
          property: "defense",
          valueIndex: 0,
          value: [3],
          description: ["Защита всех войск +3"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  belt: {
    level: 1,
    ancient: false,
    perfect: false,
    title: "Пояс рейнджера",
    place: "belt",
    twoHanded: false,
    set: "Эльфийский рейнджер",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  bracers: {
    level: 1,
    ancient: false,
    perfect: false,
    title: "Браслеты эльфийского рейнджера",
    place: "bracers",
    twoHanded: false,
    set: "Эльфийский рейнджер",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "forest",
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
          title: "Браслеты эльфийского рейнджера",
          property: "attackRate",
          valueIndex: 0,
          value: [0.15, 0.18],
          description: [
            "Атака всех войск +15% на земле Леса",
            "Атака всех войск +18% на земле Леса",
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
          title: "Браслеты эльфийского рейнджера",
          property: "damageRate",
          valueIndex: 0,
          value: [-0.03],
          description: ["Атака магических башен -3%"],
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
