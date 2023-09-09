CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE days (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    feriado INT,
    dia INT,
    diaSemana INT,
    mes INT,
    ano INT,
    curiosidade VARCHAR(255),
    lua INT
);
