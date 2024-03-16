//--- Комплект Кавалерист
const kit = {
  kit: {
    setTitle: "Кавалерист",
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
        title: "Комплект Кавалерист",
      },
    ],
  },
  back: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Плащ всадника",
    place: "back",
    twoHanded: false,
    set: "Кавалерист",
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
    title: "Броня кавалериста",
    place: "armor",
    twoHanded: false,
    set: "Кавалерист",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "unit",
          units: ["cavalier"],
          title: "Броня кавалериста",
          property: "healthRate",
          valueIndex: 0,
          value: [0.35, 0.42],
          description: ["Здоровье Всадников +35%", "Здоровье Всадников +42%"],
          battle: true,
        },
      ],
      perfect: [
        {
          title: "Броня кавалериста",
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
          title: "Броня кавалериста",
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
    title: "Кольцо преводсходства силы",
    place: "ring",
    twoHanded: false,
    set: "Кавалерист",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "unit",
          units: ["cavalier"],
          title: "Кольцо преводсходства силы",
          property: "attackRate",
          valueIndex: 0,
          value: [-0.35, -0.42],
          description: [
            "Атака Всадников -35%&Действует на противника",
            "Атака Всадников -42%&Действует на противника",
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
          title: "Кольцо преводсходства силы",
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
    title: "Шлем превосходства всадников",
    place: "head",
    twoHanded: false,
    set: "Кавалерист",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "unit",
          units: ["cavalier"],
          title: "Шлем превосходства всадников",
          property: "healthRate",
          valueIndex: 0,
          value: [-0.35, -0.42],
          description: [
            "Здоровье Всадников -35%&Действует на противника",
            "Здоровье Всадников -42%&Действует на противника",
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
          title: "Шлем превосходства всадников",
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
    title: "Подкова удачи",
    place: "bag",
    twoHanded: false,
    set: "Кавалерист",
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
          title: "Подкова удачи",
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
    title: "Молот всадника",
    place: "rightHand",
    twoHanded: false,
    set: "Кавалерист",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "unit",
          units: ["cavalier"],
          title: "Молот всадника",
          property: "attackRate",
          valueIndex: 0,
          value: [0.35, 0.42],
          description: ["Атака Всадников +35%", "Атака Всадников +42%"],
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
          title: "Молот всадника",
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
          title: "Молот всадника",
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
    title: "Ботфорты тренировки",
    place: "boots",
    twoHanded: false,
    set: "Кавалерист",
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
    title: "Амулет преследования",
    place: "neck",
    twoHanded: false,
    set: "Кавалерист",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "unit",
          units: ["cavalier"],
          title: "Амулет преследования",
          property: "persecutionRate",
          valueIndex: 0,
          value: [0.35, 0.42],
          description: [
            "Атака перследователей +35% для Всадников",
            "Атака перследователей +42% для Всадников",
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
  leftHand: {
    level: 3,
    ancient: false,
    perfect: false,
    title: "Щит зари",
    place: "leftHand",
    twoHanded: false,
    set: "Кавалерист",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "unit",
          units: ["cavalier"],
          title: "Щит зари",
          property: "defense",
          valueIndex: 0,
          value: [35, 42],
          description: ["Защита Всадников +35", "Защита Всадников +42"],
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
          title: "Щит зари",
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
    title: "Штаны Кавалериста",
    place: "pants",
    twoHanded: false,
    set: "Кавалерист",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "unit",
          units: ["cavalier"],
          title: "Штаны Кавалериста",
          property: "defense",
          valueIndex: 0,
          value: [-30, -36],
          description: [
            "Защита Всадников -30&Действует на противника",
            "Защита Всадников -36&Действует на противника",
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
          title: "Штаны Кавалериста",
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
    title: "Седельная сумка",
    place: "belt",
    twoHanded: false,
    set: "Кавалерист",
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
    title: "Наручи Кавалериста",
    place: "bracers",
    twoHanded: false,
    set: "Кавалерист",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player_ally",
          appliedOn: "all",
          targetType: "unit",
          units: ["cavalier"],
          title: "Наручи Кавалериста",
          property: "attackRate",
          valueIndex: 0,
          value: [0.25, 0.3],
          description: [
            "Атака Всадников +25%&Действует на себя, союзника",
            "Атака Всадников +30%&Действует на себя, союзника",
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
          title: "Наручи Кавалериста",
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
