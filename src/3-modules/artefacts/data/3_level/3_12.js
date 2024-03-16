//--- Комплект Легендарный миротворец
const kit = {
  kit: {
    setTitle: "Легендарный миротворец",
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
        title: "Комплект Легендарный миротворец",
      },
    ],
  },
  back: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Плащ арестанта",
    place: "back",
    twoHanded: false,
    set: "Легендарный миротворец",
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
    title: "Броня миротворца",
    place: "armor",
    twoHanded: false,
    set: "Легендарный миротворец",
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
          title: "Броня миротворца",
          property: "healthRate",
          valueIndex: 0,
          value: [0.3, 0.36],
          description: ["Здоровье всех войск +30%", "Здоровье всех войск +36%"],
          battle: true,
        },
      ],
      perfect: [
        {
          title: "Броня миротворца",
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
          title: "Броня миротворца",
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
    title: "Кольцо мира",
    place: "ring",
    twoHanded: false,
    set: "Легендарный миротворец",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "player",
          units: null,
          title: "Кольцо мира",
          property: "experience",
          valueIndex: 0,
          value: [-1, -1.2],
          description: [
            "Получаемый героем опыт в бою -100%&Действует на противника",
            "Получаемый героем опыт в бою -120%&Действует на противника",
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
          title: "Кольцо мира",
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
    title: "Шлем укрепления зданий",
    place: "head",
    twoHanded: false,
    set: "Легендарный миротворец",
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
          title: "Шлем укрепления зданий",
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
    title: "Платок умиротворения преследователей",
    place: "bag",
    twoHanded: false,
    set: "Легендарный миротворец",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "all",
          appliedOn: "all",
          targetType: "unit",
          units: ["swordsman", "cavalier", "flying", "archer"],
          title: "Платок умиротворения преследователей",
          property: "persecutionRate",
          valueIndex: 0,
          value: [-1, 1.2],
          description: [
            "Атака всех перследователей -100%&Действует на себя, союзника, противника",
            "Атака всех перследователей -120%&Действует на себя, союзника, противника",
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
          title: "Платок умиротворения преследователей",
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
    title: "Кинжал демобилизации",
    place: "rightHand",
    twoHanded: false,
    set: "Легендарный миротворец",
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
          title: "Кинжал демобилизации",
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
          title: "Кинжал демобилизации",
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
    title: "Золотые Сапоги замедления",
    place: "boots",
    twoHanded: false,
    set: "Легендарный миротворец",
    buffs: {
      common: [],
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
    title: "Амулет неповиновения войск",
    place: "neck",
    twoHanded: false,
    set: "Легендарный миротворец",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  leftHand: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Щит миротворца",
    place: "leftHand",
    twoHanded: false,
    set: "Легендарный миротворец",
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
          title: "Щит миротворца",
          property: "defense",
          valueIndex: 0,
          value: [30, 36],
          description: ["Защита всех войск +30", "Защита всех войск +36"],
          battle: 0,
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
          title: "Щит миротворца",
          property: "attackRate",
          valueIndex: 0,
          value: [0.09],
          description: ["Атака всех войск +9%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  pants: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Поножи медлительности",
    place: "pants",
    twoHanded: false,
    set: "Легендарный миротворец",
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
          title: "Поножи медлительности",
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
    title: "Пояс миротворца",
    place: "belt",
    twoHanded: false,
    set: "Легендарный миротворец",
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
    title: "Наручи умиротворения",
    place: "bracers",
    twoHanded: false,
    set: "Легендарный миротворец",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "all",
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
          title: "Наручи умиротворения",
          property: "attackRate",
          valueIndex: 0,
          value: [-0.25, -0.3],
          description: [
            "Атака всех войск -25%&Действует на себя, союзника, противника",
            "Атака всех войск -30%&Действует на себя, союзника, противника",
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
          title: "Наручи умиротворения",
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
