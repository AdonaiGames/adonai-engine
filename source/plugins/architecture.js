import { initializeECS } from '../architecture/ecs.js';

const { Engine } = Quantum;

Engine.plugins.add({
    load: engine => {
        const { updates } = engine;

        const { entities, systems } = initializeECS();

        updates.push(time => {
            for (const system of systems) system.update?.(system.entities, time);
        });

        engine.entities = entities;
        engine.systems = systems;
    },
    unload: engine => {
        delete engine.entities;
        delete engine.systems;
    }
});