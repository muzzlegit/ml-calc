//--- Комплект Кочевник
const kit = {
  kit: {
    level: 1,
    setTitle: "Кочевник",
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
        title: "Комплект Кочевник",
        property: "attackRate",
        valueIndex: 0,
        value: [0.15],
        description: ["Атака всех войск +15%"],
        battle: true,
      },
      {
        type: "artefactKit",
        player: null,
        target: "player",
        appliedOn: "all",
        targetType: "player",
        units: null,
        title: "Комплект Кочевник",
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
    title: "Плащ бескрайних степей",
    place: "back",
    twoHanded: false,
    set: "Кочевник",
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
          title: "Плащ бескрайних степей",
          property: "attackRate",
          valueIndex: 0,
          value: [-0.1, -0.12],
          description: [
            "Атака всех войск -10% на земле Степь&Действует на противника",
            "Атака всех войск -12% на земле Степь&Действует на противника",
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
    title: "Кожаный доспех Кочевника",
    place: "armor",
    twoHanded: false,
    set: "Кочевник",
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
          title: "Кожаный доспех Кочевника",
          property: "healthRate",
          valueIndex: 0,
          value: [0.15, 0.18],
          description: [
            "Здоровье всех войск +15% на земле Степь",
            "Здоровье всех войск +18% на земле Степь",
          ],
          battle: true,
        },
      ],
      perfect: [
        {
          title: "Кожаный доспех Кочевника",
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
          title: "Кожаный доспех Кочевника",
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
    title: "Кольцо кочевника",
    place: "ring",
    twoHanded: false,
    set: "Кочевник",
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
          title: "Кольцо кочевника",
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
    title: "Шапка кочевника",
    place: "head",
    twoHanded: false,
    set: "Кочевник",
    buffs: {
      common: [
        {
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
          title: "Шапка кочевника",
          property: "defenseLevel",
          valueIndex: 0,
          value: [10, 12],
          description: [
            "Предел максимальной защиты +10 на земле Степь",
            "Предел максимальной защиты +12 на земле Степь",
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
          title: "Шапка кочевника",
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
    title: "Узел кочевника",
    place: "bag",
    twoHanded: false,
    set: "Кочевник",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "unit",
          units: ["porter"],
          title: "Узел кочевника",
          property: "capacityRate",
          valueIndex: 0,
          value: [1, 1.2],
          description: [
            "Носильщики вмещают +100% ресурсов",
            "Носильщики вмещают +120% ресурсов",
          ],
          battle: true,
        },
      ],
      perfect: [
        {
          type: "artefactKit",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "player",
          units: null,
          title: "Узел кочевника",
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
    title: "Дубина кочевника",
    place: "rightHand",
    twoHanded: false,
    set: "Кочевник",
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
          title: "Дубина кочевника",
          property: "attackRate",
          valueIndex: 0,
          value: [0.15, 0.18],
          description: [
            "Атака всех войск +15% на земле Степь",
            "Атака всех войск +18% на земле Степь",
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
          title: "Дубина кочевника",
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
          unitі: [
            "porter",
            "swordsman",
            "cavalier",
            "flying",
            "archer",
            "healer",
            "mercenary",
            "mage",
          ],
          title: "Дубина кочевника",
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
    title: "Сапоги кочевника",
    place: "boots",
    twoHanded: false,
    set: "Кочевник",
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
    title: "Талисман кочевника",
    place: "neck",
    twoHanded: false,
    set: "Кочевник",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  leftHand: {
    level: 1,
    ancient: false,
    perfect: false,
    title: "Легкий щит кочевника",
    place: "leftHand",
    twoHanded: false,
    set: "Кочевник",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player_ally",
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
          title: "Легкий щит кочевника",
          property: "defense",
          valueIndex: 0,
          value: [5, 6],
          description: ["Защита всех войск +5", "Защита всех войск +6"],
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
          title: "Легкий щит кочевника",
          property: "attackRate",
          valueIndex: 0,
          value: [0.03],
          description: ["Атака всех войск +3%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  pants: {
    level: 1,
    ancient: false,
    perfect: false,
    title: "Штаны степных кочевников",
    place: "pants",
    twoHanded: false,
    set: "Кочевник",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player_ally",
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
          title: "Штаны степных кочевников",
          property: "defenseLevel",
          valueIndex: 0,
          value: [5, 6],
          description: [
            "Предел максимальной защиты +5 на земле степь",
            "Предел максимальной защиты +6 на земле степь",
          ],
          battle: true,
        },
      ],
      perfect: [
        {
          id: "c-y66tmtx0SNCy71R_WP3g",
          owner: "h3vZ4i5wIUWPP_1b-4U4Ow",
          ownerDescription: "Штаны степных кочевников",
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
          title: "Штаны степных кочевников",
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
    title: "Пояс кочевника",
    place: "belt",
    twoHanded: false,
    set: "Кочевник",
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
    title: "Наручни степного кочевника",
    place: "bracers",
    twoHanded: false,
    set: "Кочевник",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "steppe",
          targetType: "unit",
          units: ["swordsman", "cavalier", "flying", "archer"],
          title: "Наручни степного кочевника",
          property: "persecutionRate",
          valueIndex: 0,
          value: [0.15, 0.18],
          description: [
            "Атака всех преследователей +15% на земле Степь",
            "Атака всех преследователей +18% на земле Степь",
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
          title: "Наручни степного кочевника",
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
