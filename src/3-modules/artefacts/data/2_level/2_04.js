//--- Комплект Воин степей
const kit = {
  kit: {
    level: 2,
    setTitle: "Воин степей",
    buffs: [
      {
        type: "artefactKit",
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
        title: "Комплект Воин степей",
        property: "attackRate",
        valueIndex: 0,
        value: [0.25],
        description: ["Атака всех войск +25%"],
        battle: true,
      },
      {
        type: "artefactKit",
        player: null,
        target: "player",
        appliedOn: "all",
        targetType: "player",
        units: null,
        title: "Комплект Воин степей",
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
    title: "Накидка мелиорации",
    place: "back",
    twoHanded: false,
    set: "Воин степей",
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
    title: "Кираса степного воина",
    place: "armor",
    twoHanded: false,
    set: "Воин степей",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "steppe",
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
          title: "Кираса степного воина",
          property: "healthRate",
          valueIndex: 0,
          value: [0.25, 0.3],
          description: [
            "Здоровье всех войск +25% на земле Степь",
            "Здоровье всех войск +30% на земле Степь",
          ],
          battle: true,
        },
      ],
      perfect: [
        {
          title: "Кираса степного воина",
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
          title: "Кираса степного воина",
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
    title: "Кольцо степного воина",
    place: "ring",
    twoHanded: false,
    set: "Воин степей",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "steppe",
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
          title: "Кольцо степного воина",
          property: "attackRate",
          valueIndex: 0,
          value: [-0.25, -0.3],
          description: [
            "Атака всех войск -25% на земле Степь",
            "Атака всех войск -30% на земле Степь",
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
          title: "Кольцо степного воина",
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
    title: "Шлем понижения башен",
    place: "head",
    twoHanded: false,
    set: "Воин степей",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "steppe_all",
          targetType: "player",
          units: null,
          title: "Шлем понижения башен",
          property: "towersLevelReduce",
          valueIndex: 0,
          value: [false, true],
          description: [
            "Понижение уровня башен перед каждым раундом на земле Степь",
            "Понижение уровня башен перед каждым раундом",
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
          title: "Шлем понижения башен",
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
    title: "Посох заклинателя",
    place: "bag",
    twoHanded: false,
    set: "Воин степей",
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
          title: "Посох заклинателя",
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
    title: "Палица воина степей",
    place: "rightHand",
    twoHanded: false,
    set: "Воин степей",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "steppe",
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
          title: "Палица воина степей",
          property: "attackRate",
          valueIndex: 0,
          value: [0.25, 0.3],
          description: [
            "Атака всех войск +25% на земле Степь",
            "Атака всех войск +30% на земле Степь",
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
          title: "Палица воина степей",
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
          title: "Палица воина степей",
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
    title: "Сапоги степного воина",
    place: "boots",
    twoHanded: false,
    set: "Воин степей",
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
    title: "Талисман степей",
    place: "neck",
    twoHanded: false,
    set: "Воин степей",
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
    title: "Щит степей",
    place: "leftHand",
    twoHanded: false,
    set: "Воин степей",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "steppe",
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
          title: "Щит степей",
          property: "defense",
          valueIndex: 0,
          value: [25, 30],
          description: [
            "Защита всех войск +25 на земле Степь",
            "Защита всех войск +30 на земле Степь",
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
          title: "Щит степей",
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
    title: "Штаны степного воина",
    place: "pants",
    twoHanded: false,
    set: "Воин степей",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "steppe",
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
          title: "Штаны степного воина",
          property: "healthRate",
          valueIndex: 0,
          value: [-0.2, -0.24],
          description: [
            "Здоровье всех войск -20% на земле Степь&Действует на противника",
            "Здоровье всех войск -24% на земле Степь&Действует на противника",
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
          title: "Штаны степного воина",
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
    title: "Пояс степного воина",
    place: "belt",
    twoHanded: false,
    set: "Воин степей",
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
    title: "Наручи варвара",
    place: "bracers",
    twoHanded: false,
    set: "Воин степей",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "steppe",
          targetType: "unit",
          units: ["swordsman", "cavalier", "flying", "archer"],
          title: "Наручи варвара",
          property: "persecutionRate",
          valueIndex: 0,
          value: [0.3, 0.36],
          description: [
            "Атака всех преследователей +30% на земле Степь&Действует на противника",
            "Атака всех преследователей +36% на земле Степь&Действует на противника",
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
          title: "Наручи варвара",
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
