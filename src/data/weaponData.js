const weaponData = {
  // ----------------------------------------------- UR -----------------------------------------------
  Lucifer: {
    firstWeapon: {
      name: 'Doomsday Blade',
      lv100: 'After using "Fallen Flames", gain a buff of 30% Lifesteal.',
      lv200: 'Gains a buff of 45% Lifesteal.',
      lv300: 'Gains a buff of 60% Lifesteal.',
      lv400:
        'When Lucifer uses "Fallen Stars" as a Fallen Angel, remove all his debuffs (this skill can be used when controlled).',
    },
  },
  Iset: {
    firstWeapon: {
      name: 'Resplendent Lotus',
      lv100: '"Purifying Incantation" targets are increased to 3.',
      lv200:
        'Additionally, "Purifying Incantation" increases Crit Resistance by 10% for ally targets.',
      lv300: 'After "Revival Ritual", the revived Hero restores 240 Energy.',
      lv400: '15s after the battle starts, Iset gets an ankh.',
    },
  },
  Typhon: {
    firstWeapon: {
      name: 'Storm Blade',
      lv100:
        'Whenever the "Titan Shield" is destroyed, it will regenerate after 20s.',
      lv200:
        'Whenever a "Titan Shield" is generated, all demon snakes also gain a shield of 25% of the "Titan Shield\'s" value.',
      lv300: 'Reduces the regeneration time of the "Titan Shield" to 12s.',
      lv400: 'Increases the "Titan Shield" value for snakes\' shields to 50%.',
    },
  },
  Lilith: {
    firstWeapon: {
      name: 'Skysunder Masks',
      lv100:
        "For every ally Hero on battlefield, increase Lilith's Defense by 10%. When an ally Hero dies, increase Lilith's Attack by 5%.",
      lv200:
        "When the first ally Guardian Hero dies, increase Lilith's Crit Damage by 50% for 6s.",
      lv300:
        'When the first ally Shadowarch Hero dies, enemy Heroes cannot release their Ultimate for 6s.',
      lv400:
        "For every ally Hero on battlefield, increase Lilith's Defense by 20%. When an ally Hero dies, increase Lilith's Attack by 10%.",
    },
  },
  Nuwa: {
    firstWeapon: {
      name: 'Five-Colored Stones',
      lv100:
        'For 5s after releasing "Mend the Sky", all ally Heroes will be immune to control.',
      lv200:
        'For 10s after releasing "Mend the Sky", all ally Heroes will be immune to control.',
      lv300:
        'During "Lustrous Land", the Energy removed from the target will be transferred to Nuwa.',
      lv400: 'At the beginning of battle, Nuwa uses "Pillars of the Sky".',
    },
  },
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------- SSR -----------------------------------------------
  // ------------------------------------- LUMINARCH -------------------------------------
  Zeus: {
    firstWeapon: {
      name: 'Cyclopean Masterbolt',
      lv100:
        'After Zeus releases his Ultimate for the first time, stun targets for 2.5s.',
      lv200:
        'After Zeus releases his Ultimate for the first 2 times, stun targets for 2.5s.',
      lv300:
        'After Zeus releases his Ultimate for the first 3 times, stun targets for 2.5s.',
      lv400: "Increases Ultimate's damage dealt by 30%.",
    },
  },
  Athena: {
    firstWeapon: {
      name: 'Ensouled Aegis',
      lv100:
        'When "Aegis of Light" shield is destroyed, allies recover 10% of their lost Health.',
      lv200:
        'Allies recover 20% of their lost Health while under "Aegis of Light\'s" protection.',
      lv300:
        'When the "Aegis of Light" shield is active, increase Crit Resistance by 20% for allies under its protection.',
      lv400:
        'Allies recover 30% of their lost Health while under "Aegis of Light\'s" protection.',
    },
  },
  Susanoo: {
    firstWeapon: {
      name: 'Totsuka-no-Tsurugi',
      lv100: 'Susanoo gains 20 energy for every Crit dealt.',
      lv200:
        'The first sword hit of "Phantom Furry" deals additional damage equal to 20% of target\'s current health.',
      lv300: 'Susanoo gains 30 energy for every Crit dealt.',
      lv400:
        'The last sword hit of "Phantom Furry" deals additional damage equal to 20% of target\'s current health.',
    },
  },
  Artemis: {
    firstWeapon: {
      name: 'Olympian Aetherbow',
      lv100:
        'When Artemis stuns a target, increase her Attack Speed by 25% for 3s.',
      lv200:
        'If there are no enemies close to Artemis, increase her Crit Chance by 5%.',
      lv300:
        'If there are no enemies close to Artemis, increase her Crit Damage by 15%.',
      lv400:
        "If Artemis deals Crit Damage with her auto-attack, deal an extra 4% of target's max Health as damage (total damage cannot exceed 300% of Artemis's Attack).",
    },
  },
  Dionysus: {
    firstWeapon: {
      name: 'Ivy Thyrus Staff',
      lv100: 'Decreases "Drunken" enemies\' Defense by 20%.',
      lv200: 'Decreases "Drunken" enemies\' Defense by 40%.',
      lv300: 'Decreases "Drunken" enemies\' Defense by 60%.',
      lv400:
        'If enemy inflicted with "Drunken" dies before its duration ends, re-start "Drunken" on the nearest enemy.',
    },
  },
  Thor: {
    firstWeapon: {
      name: 'Dwarven Mjolnir',
      lv100:
        'While "Divine Descent" is active, increases Thor\'s Attack Speed by 30%.',
      lv200:
        'If an enemy unit is killed while "Divine Descent" is active, increase the duration by 5s (can be triggered 1 time every time the skill is used).',
      lv300:
        'While "Divine Descent" is active, increases Thor\'s Attack Speed by 60%.',
      lv400:
        'While "Divine Descent" is active, increases Thor is immune to control.',
    },
  },
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------- SHADOWARCH -------------------------------------
  Persephone: {
    firstWeapon: {
      name: "Hell's Butterflies",
      lv100: 'Increases the number of targets of "Nether Butterflies" to 2.',
      lv200:
        'When the target of "Nether Butterflies" has no buffs, deal additional damage equal to 5% of their current health.',
      lv300: 'Deal additional damage equal to 5% of their current health.',
      lv400: 'Increases the number of targets of "Nether Butterflies" to 3.',
    },
  },
  Izanami: {
    firstWeapon: {
      name: 'Lamp of Yomi',
      lv100:
        'When there is/are 1/2/3 enemy(ies) on the battlefield, "Breath of the Dead" deals 24%/16%/8% more damage.',
      lv200: '"Breath of the Dead" deals 36%/24%/12% more damage.',
      lv300:
        'Collect an extra 1 Wandering Ghost(s) when using "Specter Impact".',
      lv400: '"Breath of the Dead" deals 48%/32%/16% more damage.',
    },
  },
  Hades: {
    firstWeapon: {
      name: 'Bident of Hell',
      lv100:
        "After being summoned, Hellhound's first attack will stun the enemy for 2s.",
      lv200:
        'If "Death Scythe" does not kill the target, return 500 Energy to Hades.',
      lv300:
        'Reduces the target\'s healing received by 100% for the duration of "Death Scythe".',
      lv400: "Hellhound's first attack will stun the enemy for 3s.",
    },
  },
  Medusa: {
    firstWeapon: {
      name: 'Poisonous Fangs',
      lv100:
        'Increases Attack Speed by 40% for 5s after releasing "Petrifying Glare".',
      lv200: 'Increases Attack Speed by 70% for "Petrifying Glare".',
      lv300:
        'After using the skill, "Venomous Snake", absorb removed Energy from the target.',
      lv400: 'Increases Attack Speed by 100% for "Petrifying Glare".',
    },
  },
  Anubis: {
    firstWeapon: {
      name: 'Judgement Scythe',
      lv100: 'Anubis recovers 5% of Health each time one of his mummies dies.',
      lv200: 'Anubis recovers 10% of Health each time one of his mummies dies.',
      lv300: 'Anubis recovers 15% of Health each time one of his mummies dies.',
      lv400:
        'Anubis gains 10 Energy each time when one of his mummies attacks.',
    },
  },
  Hela: {
    firstWeapon: {
      name: 'Laevateinn',
      lv100: 'The enemy targeted by "Dark Cure" will also be silenced for 3s.',
      lv200: '"Dark Cure" damage increased by 15%.',
      lv300: 'After using "Dark Cure" 3x, increase healed targets to 3.',
      lv400: '"Dark Cure" damage increased by 30%.',
    },
  },
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------- GUARDIAN -------------------------------------
  Hercules: {
    firstWeapon: {
      name: 'Lion Killer',
      lv100:
        'Increases Hercules\' damage dealt by 5% after "Sword Storm" is triggered. Stackable up to 10 times.',
      lv200: 'Stackable up to 20 times.',
      lv300: 'Decreases damage taken from enemy auto-attacks by 35%.',
      lv400:
        'When "Sword Storm" stacks 20 times, increase all healing received during "Provoke" by 50%.',
    },
  },
  'Lu Bu': {
    firstWeapon: {
      name: 'Heaven Scorcher Halberd',
      lv100:
        "If an enemy dies within 5s after being hit by Lu Bu, increase Lu Bu's Attack Speed by 50% for 5.",
      lv200:
        'If "Halfmoon Slash" only hits 1 enemy, opponent takes 50% extra damage for the next 8s.',
      lv300:
        'If "Halfmoon Slash" only hits 2 enemies, opponents take 30% extra damage for the next 8s.',
      lv400:
        "When Lu Bu's Health is below 50%, he is immune to control skills.",
    },
  },
  'Ganjiang & Moye': {
    firstWeapon: {
      name: 'Ganjiang Moye Blade',
      lv100:
        'Increases Attack Speed by 40% for 5s after releasing "Twin Souls".',
      lv200:
        'Increases Attack Speed by 70% for 5s after releasing "Twin Souls".',
      lv300:
        'Increases Attack Speed by 100% for 5s after releasing "Twin Souls".',
      lv400: '"Twin Souls" can be released 2 times.',
    },
  },
  'Joan of Arc': {
    firstWeapon: {
      name: 'Fleur-de-Lys Lance',
      lv100:
        'Heroes protected by "Deus le Volt" convert 10% of the blocked damage into Health recovered.',
      lv200: 'Convert 20% of damage taken into Health recovered.',
      lv300: 'Convert 30% of damage taken into Health recovered.',
      lv400:
        'Increases the number of allies protected by "Deus le Volt" to 2 (with the lowest Health).',
    },
  },
  Cleopatra: {
    firstWeapon: {
      name: 'Imperial Caduceus',
      lv100:
        'For every stack of "Snake Poison" on target, increase Crit Chance by 3% when attacking those inflicted.',
      lv200:
        'Add 1 additional stack(s) of "Snake Poison" when Cleopatra deals Crit Damage to her target.',
      lv300:
        'When an enemy is inflicted with "Snake Poison" dies, their stacks will be transferred to all nearby enemies.',
      lv400:
        'Increases Crit Damage dealt by 35% to enemy(ies) with 5 stacks of "Snake Poison".',
    },
  },
  Cassandra: {
    firstWeapon: {
      name: 'Fatesfury Crystal Ball',
      lv100:
        "Increases ally Heroes' healing received by 2% whenever they are attacked (up to 30%).Reduced enemy Heroes' healing received by 2% whenever they are attacked (up to 30%).",
      lv200: "Increases target's healing received by 50%.",
      lv300: "Reduces target's healing received by 50%.",
      lv400:
        'Increases ally Heroes Attack by 20% when their Health is above 50%.',
    },
  },
  Archimedes: {
    firstWeapon: {
      name: 'Skyfire Launcher',
      lv100:
        'Gain 1 Energy after every attack on an enemy with 10 stacks of "Piercing Rounds".',
      lv200: 'Increase Energy gained after each attack to 2.',
      lv300: 'Increase Energy gained after each attack to 3.',
      lv400:
        'After the first 30s of battle, increase the stack limit of "Piercing Rounds" to 20.',
    },
  },
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------- VERDIAN -------------------------------------
  Nagakanya: {
    firstWeapon: {
      name: 'Master Dragon Pearl',
      lv100:
        'When an ally target is protected by "Aqua Barrier" restore 15 Energy each second for 5s to them.',
      lv200: 'Restore 20 Energy each second for 5s to them.',
      lv300: 'Restore 25 Energy each second for 5s to them.',
      lv400:
        'Remove all Debuffs on ally Heroes when releasing "Blessing of Rain".',
    },
  },
  'Tamamo no Mae': {
    firstWeapon: {
      name: 'Nine-Tailed Fox Fan',
      lv100: 'Increases Attack Speed by 20% after 8 "Fox Fires" are summoned.',
      lv200: 'Increases Crit Chance by 20% after 12 "Fox Fires" are summoned.',
      lv300: 'Increases Crit Damage by 20% after 16 "Fox Fires" are summoned.',
      lv400: 'When "Phantom Dash" is triggered, summon 1 "Fox Fire".',
    },
  },
  Idun: {
    firstWeapon: {
      name: 'Golden Apple Tree Branch',
      lv100:
        'The Golden Apples from "Idun\'s Salvation" recover an extra 10% of the target\'s Health within 6s.',
      lv200: "Recover an extra 15% of the target's Health.",
      lv300: "Recover an extra 20% of the target's Health.",
      lv400: 'Reduces the cooldown of "Idun\'s Salvation" by 4s.',
    },
  },
  Gaia: {
    firstWeapon: {
      name: 'Earthen Warhammer',
      lv100: 'Increases the stack limit of "Earthly Vein" to 8 stacks.',
      lv200: 'Increases the stack limit of "Earthly Vein" to 10 stacks.',
      lv300:
        'The last hit of "Primal Might" will knock targets into air for 1.5s.',
      lv400: 'Decreases the regeneration cooldown of "Rocky Semblance" to 7s.',
    },
  },
  Oberon: {
    firstWeapon: {
      name: 'Myrwood Twinblades',
      lv100:
        'Increases Attack Speed by 20% for 3s after using an active skill.',
      lv200: 'Increases Attack Speed by 30%.',
      lv300: 'Increases Attack Speed by 40%',
      lv400: 'Increases Dodge by 75% for 8s after releasing "Homecoming".',
    },
  },
  Flora: {
    firstWeapon: {
      name: 'Bloodred Thyrus',
      lv100: 'Increases bounces by 1 when using "Drifting Petals".',
      lv200: 'Increases bounces by 2 when using "Drifting Petals".',
      lv300: 'Increases the duration of "Holy Fluorescence" to 10s.',
      lv400: 'Increases bounces by 3 when using "Drifting Petals".',
    },
  },
};

export default weaponData;

// const dummy = {
//   heroName: {
//     firstWeapon: {
//       name: '',
//       lv100: '',
//       lv200: '',
//       lv300: '',
//       lv400: '',
//     },
//     secondWeapon: {
//       name: '',
//       lv100: '',
//       lv200: '',
//       lv300: '',
//       lv400: '',
//     },
//   },
// };
