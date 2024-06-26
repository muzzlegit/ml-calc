//--- Комплект Властелин монстров
const kit = {
  kit: {
    setTitle: "Властелин монстров",
    level: 4,
    buffs: [
      {
        type: "artefactKit",
        player: null,
        target: "enemy",
        appliedOn: "monsters",
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
        title: "Комплект Властелин монстров",
        property: "amountRate",
        valueIndex: 0,
        value: [-0.6],
        description: [
          "60% войск не участвует в бою&Действует на противника&В бою против расы Монстры",
        ],
        battle: true,
        inWork: false,
      },
      {
        type: "artefactKit",
        player: null,
        target: "player",
        appliedOn: "all",
        targetType: "player",
        units: null,
        title: "Комплект Властелин монстров",
        property: "experience",
        valueIndex: 0,
        value: [4],
        description: ["Получаемый героем опыт в бою +400%"],
        battle: true,
        inWork: false,
      },
    ],
  },
  back: {
    level: 4,
    ancient: false,
    perfect: false,
    title: "Плащ охотника на монстров",
    place: "back",
    twoHanded: false,
    set: "Властелин монстров",
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
    level: 4,
    ancient: false,
    perfect: false,
    title: "Броня из панцирей монстров",
    place: "armor",
    twoHanded: false,
    set: "Властелин монстров",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "monsters",
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
          title: "Броня из панцирей монстров",
          property: "healthRate",
          valueIndex: 0,
          value: [0.45, 0.54],
          description: [
            "Здоровье всех войск +45%&В бою против расы Монстры",
            "Здоровье всех войск +54%&В бою против расы Монстры",
          ],
          battle: true,
          inWork: false,
        },
      ],
      perfect: [
        {
          title: "Броня из панцирей монстров",
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "fortification",
          units: null,
          property: "damageRate",
          valueIndex: 0,
          value: [2],
          description: ["Эффективность уничтожения войск на укреплениях +200%"],
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
          title: "Броня из панцирей монстров",
          property: "healthRate",
          valueIndex: 0,
          value: [0.12],
          description: ["Здоровье всех войск +12%"],
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
    level: 4,
    ancient: false,
    perfect: false,
    title: "Браслет неприкосновенности",
    place: "ring",
    twoHanded: false,
    set: "Властелин монстров",
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
          title: "Браслет неприкосновенности",
          property: "damageRate",
          valueIndex: 0,
          value: [0.2],
          description: ["Атака магических башен +20%"],
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
    level: 4,
    ancient: false,
    perfect: false,
    title: "Шлем Уничтожителя монстров",
    place: "head",
    twoHanded: false,
    set: "Властелин монстров",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "monsters",
          targetType: "player",
          units: null,
          title: "Шлем Уничтожителя монстров",
          property: "experience",
          valueIndex: 0,
          value: [4, 4.8],
          description: [
            "Получаемый героем опыт в бою +400%&В бою против расы Монстры",
            "Получаемый героем опыт в бою +480%&В бою против расы Монстры",
          ],
          battle: true,
          inWork: false,
        },
      ],
      perfect: [
        {
          ownerDescription: "Шлем Уничтожителя монстров",
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "tower",
          units: null,
          title: "Шлем Уничтожителя монстров",
          property: "damageRate",
          valueIndex: 0,
          value: [1.5],
          description: ["Атака башен +150%"],
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
    level: 4,
    ancient: false,
    perfect: false,
    title: "Кубок удачи",
    place: "bag",
    twoHanded: false,
    set: "Властелин монстров",
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
          title: "Кубок удачи",
          property: "experience",
          valueIndex: 0,
          value: [2],
          description: ["Получаемый героем опыт в бою +200%"],
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
    level: 4,
    ancient: false,
    perfect: false,
    title: "Копье властелина монстров",
    place: "rightHand",
    twoHanded: false,
    set: "Властелин монстров",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "monsters",
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
          title: "Копье властелина монстров",
          property: "attackRate",
          valueIndex: 0,
          value: [0.45, 0.54],
          description: [
            "Атака всех войск +45%&В бою против расы Монстры",
            "Атака всех войск +54%&В бою против расы Монстры",
          ],
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
          title: "Копье властелина монстров",
          property: "attackRate",
          valueIndex: 0,
          value: [-0.12],
          description: ["Атака наемников -12%"],
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
          title: "Копье властелина монстров",
          property: "defenseLevel",
          valueIndex: 0,
          value: [4],
          description: ["Предел максимальной защиты +4"],
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
    level: 4,
    ancient: false,
    perfect: false,
    title: "Сапоги охотника за артефактами",
    place: "boots",
    twoHanded: false,
    set: "Властелин монстров",
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
    level: 4,
    ancient: false,
    perfect: false,
    title: "Амулет завещаний монстров",
    place: "neck",
    twoHanded: false,
    set: "Властелин монстров",
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
    level: 4,
    ancient: false,
    perfect: false,
    title: "Щит повелителя монстров",
    place: "leftHand",
    twoHanded: false,
    set: "Властелин монстров",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "monsters",
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
          title: "Щит повелителя монстров",
          property: "defense",
          valueIndex: 0,
          value: [45, 54],
          description: [
            "Защита всех войск +45&В бою против расы Монстры",
            "Защита всех войск +54&В бою против расы Монстры",
          ],
          battle: true,
          inWork: false,
        },
      ],
      perfect: [
        {
          ownerDescription: "Щит повелителя монстров",
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
          title: "Щит повелителя монстров",
          property: "attackRate",
          valueIndex: 0,
          value: [0.12],
          description: ["Атака всех войск +12%"],
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
    level: 4,
    ancient: false,
    perfect: false,
    title: "Доспех слабости монстров",
    place: "pants",
    twoHanded: false,
    set: "Властелин монстров",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "monsters",
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
          title: "Доспех слабости монстров",
          property: "healthRate",
          valueIndex: 0,
          value: [-0.35, -0.42],
          description: [
            "Здоровье всех войск -35%&Действует на противника&В бою против расы Монстры",
            "Здоровье всех войск -42%&Действует на противника&В бою против расы Монстры",
          ],
          battle: true,
          inWork: false,
        },
      ],
      perfect: [
        {
          ownerDescription: "Доспех слабости монстров",
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
          title: "Доспех слабости монстров",
          property: "defense",
          valueIndex: 0,
          value: [12],
          description: ["Защита всех войск +12"],
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
    level: 4,
    ancient: false,
    perfect: false,
    title: "Пояс из кожи монстров",
    place: "belt",
    twoHanded: false,
    set: "Властелин монстров",
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
    level: 4,
    ancient: false,
    perfect: false,
    title: "Наручи подавления монстров",
    place: "bracers",
    twoHanded: false,
    set: "Властелин монстров",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "monsters",
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
          title: "Наручи подавления монстров",
          property: "attackRate",
          valueIndex: 0,
          value: [-0.3, -0.36],
          description: [
            "Атака всех войск -30%&Действует на противника&В бою против расы монстры",
            "Атака всех войск -36%&Действует на противника&В бою против расы монстры",
          ],
          battle: true,
          inWork: false,
        },
      ],
      perfect: [
        {
          ownerDescription: "Наручи подавления монстров",
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "magicTower",
          units: null,
          title: "Наручи подавления монстров",
          property: "damageRate",
          valueIndex: 0,
          value: [-0.12],
          description: ["Атака магических башен -12%"],
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
