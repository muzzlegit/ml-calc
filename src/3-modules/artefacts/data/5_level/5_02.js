//--- Комплект Доспехи Бога
const kit = {
  kit: {
    setTitle: "Доспехи Бога",
    level: 5,
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
        value: [5],
        description: ["Получаемый героем опыт в бою +500%"],
        battle: true,
        inWork: false,
        title: "Комплект Доспехи Бога",
      },
    ],
  },
  back: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Мантия божественной благодати",
    place: "back",
    twoHanded: false,
    set: "Доспехи Бога",
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
    level: 5,
    ancient: false,
    perfect: false,
    title: "Кольчуга Бога",
    place: "armor",
    twoHanded: false,
    set: "Доспехи Бога",
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
          title: "Кольчуга Бога",
          property: "defenseLevel",
          valueIndex: 0,
          value: [20, 24],
          description: [
            "Предел максимальной защиты +20",
            "Предел максимальной защиты +24",
          ],
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
          title: "Кольчуга Бога",
          property: "healthRate",
          valueIndex: 0,
          value: [0.25, 0.3],
          description: ["Здоровье всех войск +25%", "Здоровье всех войск +30%"],
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
          title: "Кольчуга Бога",
          property: "healthRate",
          valueIndex: 0,
          value: [0.15],
          description: ["Здоровье всех войск +15%"],
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
    level: 5,
    ancient: false,
    perfect: false,
    title: "Браслет Бога",
    place: "ring",
    twoHanded: false,
    set: "Доспехи Бога",
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
          title: "Браслет Бога",
          property: "damageRate",
          valueIndex: 0,
          value: [0.25],
          description: ["Атака магических башен +25%"],
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
    level: 5,
    ancient: false,
    perfect: false,
    title: "Шлем Божественной мудрости",
    place: "head",
    twoHanded: false,
    set: "Доспехи Бога",
    buffs: {
      common: [
        {
          title: "Шлем Божественной мудрости",
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "fortification",
          units: null,
          property: "damageRate",
          valueIndex: 0,
          value: [5, 6],
          description: [
            "Эффективность уничтожения войск на укреплениях +500%",
            "Эффективность уничтожения войск на укреплениях +600%",
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
          title: "Шлем Божественной мудрости",
          property: "damageRate",
          valueIndex: 0,
          value: [2],
          description: ["Атака башен +200%"],
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
    level: 5,
    ancient: false,
    perfect: false,
    title: "Божественный инструмент умиротворения",
    place: "bag",
    twoHanded: false,
    set: "Доспехи Бога",
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
          title: "Божественный инструмент умиротворения",
          property: "amountRate",
          valueIndex: 0,
          value: [-0.5, -0.6],
          description: [
            "50% войск не участвует в бою&Действует на противника",
            "60% войск не участвует в бою&Действует на противника",
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
          title: "Божественный инструмент умиротворения",
          property: "experience",
          valueIndex: 0,
          value: [2.5],
          description: ["Получаемый героем опыт в бою +250%"],
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
    level: 5,
    ancient: false,
    perfect: false,
    title: "Лук Бога",
    place: "rightHand",
    twoHanded: false,
    set: "Доспехи Бога",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "unit",
          units: ["archer"],
          title: "Лук Бога",
          property: "attackRate",
          valueIndex: 0,
          value: [0.55, 0.66],
          description: ["Атака Стрелков +55%", "Атака Стрелков +66%"],
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
          title: "Лук Бога",
          property: "attackRate",
          valueIndex: 0,
          value: [-0.15],
          description: ["Атака наемников -15%"],
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
          title: "Лук Бога",
          property: "defenseLevel",
          valueIndex: 0,
          value: [5],
          description: ["Предел максимальной защиты +5"],
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
    level: 5,
    ancient: false,
    perfect: false,
    title: "Сапоги Бога",
    place: "boots",
    twoHanded: false,
    set: "Доспехи Бога",
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
    level: 5,
    ancient: false,
    perfect: false,
    title: "Амулет Божественного зрения",
    place: "neck",
    twoHanded: false,
    set: "Доспехи Бога",
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
    level: 5,
    ancient: false,
    perfect: false,
    title: "Щит Бога",
    place: "leftHand",
    twoHanded: false,
    set: "Доспехи Бога",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "unit",
          units: ["mercenary"],
          title: "Щит Бога",
          property: "attackRate",
          valueIndex: 0,
          value: [-0.5, -0.6],
          description: [
            "Атака Наемников -50%&Действует на противника",
            "Атака Наемников -60%&Действует на противника",
          ],
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
          title: "Щит Бога",
          property: "defense",
          valueIndex: 0,
          value: [50, 60],
          description: ["Защита всех войск +50", "Защита всех войск +60"],
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
          title: "Щит Бога",
          property: "attackRate",
          valueIndex: 0,
          value: [0.15],
          description: ["Атака всех войск +15%"],
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
    level: 5,
    ancient: false,
    perfect: false,
    title: "Оберег Стрелков",
    place: "pants",
    twoHanded: false,
    set: "Доспехи Бога",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "unit",
          units: ["archer"],
          title: "Оберег Стрелков",
          property: "defense",
          valueIndex: 0,
          value: [45, 54],
          description: ["Защита Стрелков +45", "Защита Стрелков +54"],
          battle: true,
          inWork: false,
        },
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "unit",
          units: ["archer"],
          title: "Оберег Стрелков",
          property: "healthRate",
          valueIndex: 0,
          value: [0.45, 0.54],
          description: ["Здоровье Стрелков +45%", "Здоровье Стрелков +54%"],
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
          title: "Оберег Стрелков",
          property: "defense",
          valueIndex: 0,
          value: [15],
          description: ["Защита всех войск +15"],
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
    level: 5,
    ancient: false,
    perfect: false,
    title: "Пояс Бога",
    place: "belt",
    twoHanded: false,
    set: "Доспехи Бога",
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
    level: 5,
    ancient: false,
    perfect: false,
    title: "Наручи Бога",
    place: "bracers",
    twoHanded: false,
    set: "Доспехи Бога",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player_ally",
          appliedOn: "all",
          targetType: "unit",
          units: ["archer"],
          title: "Наручи Бога",
          property: "attackRate",
          valueIndex: 0,
          value: [0.3, 0.36],
          description: [
            "Атака Стрелков +30%&Действует на себя, союзника",
            "Атака Стрелков +36%&Действует на себя, союзника",
          ],
          battle: true,
          inWork: false,
        },
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "unit",
          units: ["swordsman"],
          title: "Наручи Бога",
          property: "attackRate",
          valueIndex: 0,
          value: [-0.2, -0.24],
          description: [
            "Атака Воинов -20%&Действует на противника",
            "Атака Воинов -24%&Действует на противника",
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
          title: "Наручи Бога",
          property: "damageRate",
          value: [-0.15],
          description: ["Атака магических башен -15%"],
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
