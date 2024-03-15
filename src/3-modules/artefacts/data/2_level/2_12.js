//--- Комплект Подземный правитель
const kit = {
  kit: {
    level: 2,
    setTitle: "Подземный правитель",
    buffs: [
      {
        type: "artefactKit",
        player: null,
        target: "player",
        appliedOn: "mine",
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
        title: "Комплект Подземный правитель",
        property: "defenseLevel",
        valueIndex: 0,
        value: [20],
        description: ["Предел максимальной защиты +20 на земле Подземелье"],
        battle: true,
      },
      {
        type: "artefactKit",
        player: null,
        target: "player",
        appliedOn: "all",
        targetType: "player",
        units: null,
        title: "Комплект Подземный правитель",
        property: "experience",
        valueIndex: 0,
        value: [2],
        description: ["Получаемый героем опыт в бою +200%"],
        battle: true,
      },
    ],
  },
  back: {
    level: 2,
    ancient: false,
    perfect: false,
    title: "Плащ скорости",
    place: "back",
    twoHanded: false,
    set: "Подземный правитель",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  armor: {
    level: 2,
    ancient: false,
    perfect: false,
    title: "Панцирь подземелий",
    place: "armor",
    twoHanded: false,
    set: "Подземный правитель",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "mine",
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
          title: "Панцирь подземелий",
          property: "healthRate",
          valueIndex: 0,
          value: [0.3, 0.36],
          description: [
            "Здоровье всех войск +30%&На земле Подземелье",
            "Здоровье всех войск +36%&На земле Подземелье",
          ],
          battle: true,
        },
      ],
      perfect: [
        {
          title: "Панцирь подземелий",
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "fortification",
          units: null,
          property: "damageRate",
          valueIndex: 0,
          value: [1],
          description: ["Эффективность уничтожения войск на укреплениях +100%"],
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
          title: "Панцирь подземелий",
          property: "healthRate",
          valueIndex: 0,
          value: [0.06],
          description: ["Здоровье всех войск +6%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  ring: {
    level: 2,
    ancient: false,
    perfect: false,
    title: "Кольцо обороны подземелий",
    place: "ring",
    twoHanded: false,
    set: "Подземный правитель",
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
          title: "Кольцо обороны подземелий",
          property: "damageRate",
          valueIndex: 0,
          value: [0.1],
          description: ["Атака магических башен +10%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  head: {
    level: 2,
    ancient: false,
    perfect: false,
    title: "Подземная Маска страха",
    place: "head",
    twoHanded: false,
    set: "Подземный правитель",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "mine",
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
          title: "Подземная Маска страха",
          property: "amountRate",
          valueIndex: 0,
          value: [-0.2, -0.24],
          description: [
            "20% войск не участвует в бою на земле Подземелье&Действует на противника",
            "24% войск не участвует в бою на земле Подземелье&Действует на противника",
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
          title: "Подземная Маска страха",
          property: "damageRate",
          valueIndex: 0,
          value: [0.5],
          description: ["Атака башен +50%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  bag: {
    level: 2,
    ancient: false,
    perfect: false,
    title: "Подземное всевидящее око",
    place: "bag",
    twoHanded: false,
    set: "Подземный правитель",
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
          title: "Подземное всевидящее око",
          property: "experience",
          valueIndex: 0,
          value: [1],
          description: ["Получаемый героем опыт в бою +100%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  rightHand: {
    level: 2,
    ancient: false,
    perfect: false,
    title: "Подземный Меч ярости",
    place: "rightHand",
    twoHanded: false,
    set: "Подземный правитель",
    buffs: {
      common: [
        {
          title: "Подземный Меч ярости",
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "mine",
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
          property: "attackRate",
          valueIndex: 0,
          value: [0.3, 0.36],
          description: [
            "Атака всех войск +30% на земле Подземелье",
            "Атака всех войск +36% на земле Подземелье",
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
          title: "Подземный Меч ярости",
          property: "attackRate",
          valueIndex: 0,
          value: [-0.06],
          description: ["Атака наемников -6%"],
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
          title: "Подземный Меч ярости",
          property: "defenseLevel",
          valueIndex: 0,
          value: [2],
          description: ["Предел максимальной защиты +2"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  boots: {
    level: 2,
    ancient: false,
    perfect: false,
    title: "Сапоги подземелий",
    place: "boots",
    twoHanded: false,
    set: "Подземный правитель",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  neck: {
    level: 2,
    ancient: false,
    perfect: false,
    title: "Подземный талисман удачи",
    place: "neck",
    twoHanded: false,
    set: "Подземный правитель",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  leftHand: {
    level: 2,
    ancient: false,
    perfect: false,
    title: "Подземный щит",
    place: "leftHand",
    twoHanded: false,
    set: "Подземный правитель",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "mine",
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
          title: "Подземный щит",
          property: "defense",
          valueIndex: 0,
          value: [30, 36],
          description: [
            "Защита всех войск +30 на земле Подземелье",
            "Защита всех войск +36 на земле Подземелье",
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
            "swordsman",
            "cavalier",
            "flying",
            "archer",
            "healer",
            "mercenary",
            "mage",
          ],
          title: "Подземный щит",
          property: "attackRate",
          valueIndex: 0,
          value: [0.06],
          description: ["Атака всех войск +6%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  pants: {
    level: 2,
    ancient: false,
    perfect: false,
    title: "Штаны подземелья",
    place: "pants",
    twoHanded: false,
    set: "Подземный правитель",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "mine",
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
          title: "Штаны подземелья",
          property: "healthRate",
          valueIndex: 0,
          value: [-0.25, -0.3],
          description: [
            "Здоровье всех войск -25% на земле Подземелье&Действует на противника",
            "Здоровье всех войск -30% на земле Подземелье&Действует на противника",
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
          title: "Штаны подземелья",
          property: "defense",
          valueIndex: 0,
          value: [6],
          description: ["Защита всех войск +6"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  belt: {
    level: 2,
    ancient: false,
    perfect: false,
    title: "Пояс подземелий",
    place: "belt",
    twoHanded: false,
    set: "Подземный правитель",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  bracers: {
    level: 2,
    ancient: false,
    perfect: false,
    title: "Наручи подземелья",
    place: "bracers",
    twoHanded: false,
    set: "Подземный правитель",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "mine",
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
          title: "Наручи подземелья",
          property: "attackRate",
          valueIndex: 0,
          value: [-0.2, -0.24],
          description: [
            "Атака всех войск -20%&Действует на противника",
            "Атака всех войск -24%&Действует на противника",
          ],
          battle: true,
        },
      ],
      perfect: [
        {
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "magicTower",
          units: null,
          title: "Наручи подземелья",
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
