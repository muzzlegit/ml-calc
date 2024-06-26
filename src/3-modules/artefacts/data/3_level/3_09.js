//--- Комплект Защитник союзника
const kit = {
  kit: {
    setTitle: "Защитник союзника",
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
        title: "Комплект Защитник союзника",
      },
    ],
  },
  back: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Плащ выживания",
    place: "back",
    twoHanded: false,
    set: "Защитник союзника",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player_ally",
          appliedOn: "all",
          targetType: "unit",
          units: ["healer"],
          title: "Плащ выживания",
          property: "resurrectionRate",
          valueIndex: 0,
          value: [0.2, 0.24],
          description: [
            "Целители воскрешают +20%&Действует на себя, союзника",
            "Целители воскрешают +24%&Действует на себя, союзника",
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
  armor: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Кольчуга опеки",
    place: "armor",
    twoHanded: false,
    set: "Защитник союзника",
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
          title: "Кольчуга опеки",
          property: "healthRate",
          valueIndex: 0,
          value: [0.2, 0.24],
          description: [
            "Здоровье всех войск +20%&Действует себя, союзника",
            "Здоровье всех войск +24%&Действует себя, союзника",
          ],
          battle: true,
          inWork: false,
        },
      ],
      perfect: [
        {
          title: "Кольчуга опеки",
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
          title: "Кольчуга опеки",
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
    title: "Браслет дипломатии",
    place: "ring",
    twoHanded: false,
    set: "Защитник союзника",
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
          title: "Браслет дипломатии",
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
    title: "Шлем устойчивости зданий",
    place: "head",
    twoHanded: false,
    set: "Защитник союзника",
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
          title: "Шлем устойчивости зданий",
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
    title: "Рог защитника союзника",
    place: "bag",
    twoHanded: false,
    set: "Защитник союзника",
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
          title: "Рог защитника союзника",
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
    title: "Шипы заграждений",
    place: "rightHand",
    twoHanded: false,
    set: "Защитник союзника",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "fortification",
          units: null,
          title: "Шипы заграждений",
          property: "damageRate",
          valueIndex: 0,
          value: [3.5, 4.2],
          description: [
            "Эффективность уничтожения войск на укреплениях +350%",
            "Эффективность уничтожения войск на укреплениях +420%",
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
          title: "Шипы заграждений",
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
          title: "Шипы заграждений",
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
    title: "Сапоги подмоги",
    place: "boots",
    twoHanded: false,
    set: "Защитник союзника",
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
    title: "Амулет союзных действий",
    place: "neck",
    twoHanded: false,
    set: "Защитник союзника",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player_ally",
          appliedOn: "all",
          targetType: "player",
          units: null,
          title: "Амулет союзных действий",
          property: "experience",
          valueIndex: 0,
          value: [1, 1.2],
          description: [
            "Получаемый героем опыт в бою +100%&Действует на себя, союзника",
            "Получаемый героем опыт в бою +120%&Действует на себя, союзника",
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
    title: "Щит защитника союзника",
    place: "leftHand",
    twoHanded: false,
    set: "Защитник союзника",
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
          title: "Щит защитника союзника",
          property: "defense",
          valueIndex: 0,
          value: [20, 24],
          description: [
            "Защита всех войск +20&Действует на себя, союзника",
            "Защита всех войск +24&Действует на себя, союзника",
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
          title: "Щит защитника союзника",
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
    title: "Штаны дружбы",
    place: "pants",
    twoHanded: false,
    set: "Защитник союзника",
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
          title: "Штаны дружбы",
          property: "defenseLevel",
          valueIndex: 0,
          value: [10, 12],
          description: [
            "Предел максимальной защиты +10&Действует на себя, союзника",
            "Предел максимальной защиты +12&Действует на себя, союзника",
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
          title: "Штаны дружбы",
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
    title: "Пояс защитника",
    place: "belt",
    twoHanded: false,
    set: "Защитник союзника",
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
    title: "Наручи союзника",
    place: "bracers",
    twoHanded: false,
    set: "Защитник союзника",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player_ally",
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
          title: "Наручи союзника",
          property: "attackRate",
          valueIndex: 0,
          value: [0.2, 0.24],
          description: [
            "Атака всех войск +20%&Действует на себя, союзника",
            "Атака всех войск +24%&Действует на себя, союзника",
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
          title: "Наручи союзника",
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
