//--- Комплект Властелин мира
const kit = {
  kit: {
    setTitle: "Властелин мира",
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
        title: "Комплект Властелин мира",
      },
    ],
  },
  back: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Накидка фортуны",
    place: "back",
    twoHanded: false,
    set: "Властелин мира",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "player",
          units: null,
          title: "Накидка фортуны",
          property: "experience",
          valueIndex: 0,
          value: [2, 2.4],
          description: [
            "Получаемый героем опыт в бою +200%",
            "Получаемый героем опыт в бою +240%",
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
    level: 5,
    ancient: false,
    perfect: false,
    title: "Броня Властелина мира",
    place: "armor",
    twoHanded: false,
    set: "Властелин мира",
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
          title: "Броня Властелина мира",
          property: "healthRate",
          valueIndex: 0,
          value: [0.5, 0.6],
          description: ["Здоровье всех войск +50%", "Здоровье всех войск +60%"],
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
          title: "Броня Властелина мира",
          property: "healthRate",
          valueIndex: 0,
          value: [0.15],
          description: ["Здоровье всех войск +15%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  ring: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Легендарный Браслет экономии",
    place: "ring",
    twoHanded: false,
    set: "Властелин мира",
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
          title: "Легендарный Браслет экономии",
          property: "damageRate",
          valueIndex: 0,
          value: [0.25],
          description: ["Атака магических башен +25%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  head: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Шлем Властелина Мира",
    place: "head",
    twoHanded: false,
    set: "Властелин мира",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "player",
          units: null,
          title: "Шлем Властелина Мира",
          property: "experience",
          valueIndex: 0,
          value: [2.5, 3],
          description: [
            "Получаемый героем опыт в бою +250%",
            "Получаемый героем опыт в бою +300%",
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
          title: "Шлем Властелина Мира",
          property: "damageRate",
          valueIndex: 0,
          value: [2],
          description: ["Атака башен +200%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  bag: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Великий скарабей удачи",
    place: "bag",
    twoHanded: false,
    set: "Властелин мира",
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
          title: "Великий скарабей удачи",
          property: "experience",
          valueIndex: 0,
          value: [2.5],
          description: ["Получаемый героем опыт в бою +250%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  rightHand: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Мифическая Аркбаллиста",
    place: "rightHand",
    twoHanded: true,
    set: "Властелин мира",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "player",
          units: null,
          title: "Мифическая Аркбаллиста",
          property: "roundDamage",
          valueIndex: 0,
          value: [50000, 60000],
          description: [
            "Атака в каждом раунде 50000",
            "Атака в каждом раунде 60000",
          ],
          battle: true,
        },
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "player",
          units: null,
          title: "Мифическая Аркбаллиста",
          property: "attackBoost",
          valueIndex: 0,
          value: [0.25, 0.3],
          description: ["Усиление атаки армии 25%", "Усиление атаки армии 30%"],
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
          title: "Мифическая Аркбаллиста",
          property: "attackRate",
          valueIndex: 0,
          value: [-0.15],
          description: ["Атака наемников -15%"],
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
          title: "Мифическая Аркбаллиста",
          property: "defenseLevel",
          valueIndex: 0,
          value: [5],
          description: ["Предел максимальной защиты +5"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  boots: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Скороходы Властелина мира",
    place: "boots",
    twoHanded: false,
    set: "Властелин мира",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  neck: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Древний Амулет скорпиона",
    place: "neck",
    twoHanded: false,
    set: "Властелин мира",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  pants: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Доспех Властелина мира",
    place: "pants",
    twoHanded: false,
    set: "Властелин мира",
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
          title: "Доспех Властелина мира",
          property: "defense",
          valueIndex: 0,
          value: [50, 60],
          description: ["Защита всех войск +50", "Защита всех войск +60"],
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
          title: "Доспех Властелина мира",
          property: "defense",
          valueIndex: 0,
          value: [15],
          description: ["Защита всех войск +15"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  belt: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Пояс Властелина мира",
    place: "belt",
    twoHanded: false,
    set: "Властелин мира",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  bracers: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Наручи Властелина мира",
    place: "bracers",
    twoHanded: false,
    set: "Властелин мира",
    buffs: {
      common: [
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
          title: "Наручи Властелина мира",
          property: "attackRate",
          valueIndex: 0,
          value: [0.5, 0.6],
          description: ["Атака всех войск +50%", "Атака всех войск +60%"],
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
          title: "Наручи Властелина мира",
          property: "damageRate",
          value: [-0.15],
          description: ["Атака магических башен -15%"],
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
