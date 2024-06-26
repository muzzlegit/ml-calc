//--- Комплект Подавитель магов
const kit = {
  kit: {
    setTitle: "Подавитель магов",
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
        title: "Комплект Подавитель магов",
      },
    ],
  },
  back: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Плащ Заморозки",
    place: "back",
    twoHanded: false,
    set: "Подавитель магов",
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
    title: "Кираса подавления магов",
    place: "armor",
    twoHanded: false,
    set: "Подавитель магов",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "unit",
          units: ["mage"],
          title: "Кираса подавления магов",
          property: "attackRate",
          valueIndex: 0,
          value: [-1.2, -1.44],
          description: [
            "Атака Магов -120%&Действует на противника",
            "Атака Магов -144%&Действует на противника",
          ],
          battle: true,
          inWork: false,
        },
      ],
      perfect: [
        {
          title: "Кираса подавления магов",
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
          title: "Кираса подавления магов",
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
    title: "Кольцо антимага",
    place: "ring",
    twoHanded: false,
    set: "Подавитель магов",
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
          title: "Кольцо антимага",
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
    title: "Маска ужаса",
    place: "head",
    twoHanded: false,
    set: "Подавитель магов",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
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
          title: "Маска ужаса",
          property: "amountRate",
          valueIndex: 0,
          value: [-0.3, -0.36],
          description: [
            "30% войск не участвует в бою&Действует на противника",
            "36% войск не участвует в бою&Действует на противника",
          ],
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
          targetType: "tower",
          units: null,
          title: "Маска ужаса",
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
    title: "Кристаллы сглаза магов",
    place: "bag",
    twoHanded: false,
    set: "Подавитель магов",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "unit",
          units: ["mage"],
          title: "Кристаллы сглаза магов",
          property: "healthRate",
          valueIndex: 0,
          value: [-0.6, -0.72],
          description: [
            "Здоровье Магов -60%&Действует на противника",
            "Здоровье Магов -72%&Действует на противника",
          ],
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
          targetType: "player",
          units: null,
          title: "Кристаллы сглаза магов",
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
    title: "Кистень разрушений",
    place: "rightHand",
    twoHanded: false,
    set: "Подавитель магов",
    buffs: {
      common: [],
      perfect: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "unit",
          units: ["mercenary"],
          title: "Кистень разрушений",
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
          title: "Кистень разрушений",
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
    title: "Митриловые Сапоги препятствий",
    place: "boots",
    twoHanded: false,
    set: "Подавитель магов",
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
    title: "Ожерелье подавителя магов",
    place: "neck",
    twoHanded: false,
    set: "Подавитель магов",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "unit",
          units: ["mage"],
          title: "Ожерелье подавителя магов",
          property: "suppression",
          valueIndex: 0,
          value: [-30, -36],
          description: [
            "Каждый маг в бою подавляет -30 урона&Действует на противника",
            "Каждый маг в бою подавляет -36 урона&Действует на противника",
          ],
          battle: true,
          inWork: false,
        },
      ],
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
    title: "Башенный щит антимага",
    place: "leftHand",
    twoHanded: false,
    set: "Подавитель магов",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "magicTower",
          units: null,
          title: "Башенный щит антимага",
          property: "damageRate",
          valueIndex: 0,
          value: [-0.15, -0.18],
          description: [
            "Атака магических башен -15%&Действует на противника",
            "Атака магических башен -18%&Действует на противника",
          ],
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
          title: "Башенный щит антимага",
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
    title: "Штаны хрупкости",
    place: "pants",
    twoHanded: false,
    set: "Подавитель магов",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "unit",
          units: ["mage"],
          title: "Штаны хрупкости",
          property: "defense",
          valueIndex: 0,
          value: [-50, -60],
          description: [
            "Защита Магов -50&Действует на противника",
            "Защита Магов -60&Действует на противника",
          ],
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
            "porter",
            "swordsman",
            "cavalier",
            "flying",
            "archer",
            "healer",
            "mercenary",
            "mage",
          ],
          title: "Штаны хрупкости",
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
    title: "Пояс подавителя магов",
    place: "belt",
    twoHanded: false,
    set: "Подавитель магов",
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
    title: "Браслеты слабости магов",
    place: "bracers",
    twoHanded: false,
    set: "Подавитель магов",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "unit",
          units: ["mage"],
          title: "Браслеты слабости магов",
          property: "roundAttackRate",
          valueIndex: 0,
          value: [-0.4, -0.48],
          description: [
            "Увеличение атаки Магов на -40% после каждого раунда&Действует на противника",
            "Увеличение атаки Магов на -48% после каждого раунда&Действует на противника",
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
          targetType: "magicTower",
          units: null,
          title: "Браслеты слабости магов",
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
