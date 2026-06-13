"use client";

import { useMemo, useState } from "react";

type DestinationKey = "paris" | "cretace" | "florence";

type Answers = {
  experience: DestinationKey | "";
  period: DestinationKey | "";
  preference: DestinationKey | "";
  activity: DestinationKey | "";
};

const results = {
  paris: {
    title: "Paris 1889",
    description:
      "Vous semblez attiré(e) par l’élégance, l’effervescence urbaine et le raffinement de la Belle Époque. Paris 1889 vous offrira une immersion prestigieuse entre monuments, culture et atmosphère historique.",
  },
  cretace: {
    title: "Crétacé -65M",
    description:
      "Votre profil révèle un goût pour l’aventure, la nature sauvage et les expériences hors du commun. Le Crétacé est la destination idéale pour vivre un voyage spectaculaire au plus près du monde préhistorique.",
  },
  florence: {
    title: "Florence 1504",
    description:
      "Vous êtes naturellement orienté(e) vers l’art, l’architecture et la richesse culturelle. Florence 1504 vous plongera dans une parenthèse raffinée au cœur de la Renaissance italienne.",
  },
};

export default function TravelQuiz() {
  const [answers, setAnswers] = useState<Answers>({
    experience: "",
    period: "",
    preference: "",
    activity: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof Answers, value: DestinationKey) => {
    setAnswers((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const isComplete = Object.values(answers).every((value) => value !== "");

  const recommendation = useMemo(() => {
    const score: Record<DestinationKey, number> = {
      paris: 0,
      cretace: 0,
      florence: 0,
    };

    Object.values(answers).forEach((value) => {
      if (value) score[value] += 1;
    });

    const sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);
    return sorted[0][0] as DestinationKey;
  }, [answers]);

  const resetQuiz = () => {
    setAnswers({
      experience: "",
      period: "",
      preference: "",
      activity: "",
    });
    setSubmitted(false);
  };

  return (
    <section
      id="quiz"
      className="bg-zinc-950 px-6 py-20 text-white md:px-10"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-400">
            Personnalisation
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Quel voyage temporel est fait pour vous ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Répondez à ces 4 questions pour découvrir la destination qui
            correspond le mieux à votre style de voyage.
          </p>
        </div>

        {!submitted ? (
          <div className="space-y-8 rounded-3xl border border-amber-400/15 bg-zinc-900/80 p-6 shadow-2xl md:p-8">
            <div>
              <h3 className="mb-4 text-lg font-semibold">
                1. Quel type d’expérience recherchez-vous ?
              </h3>
              <div className="grid gap-3 md:grid-cols-3">
                <OptionCard
                  selected={answers.experience === "florence"}
                  onClick={() => handleChange("experience", "florence")}
                  label="Culturelle et artistique"
                />
                <OptionCard
                  selected={answers.experience === "cretace"}
                  onClick={() => handleChange("experience", "cretace")}
                  label="Aventure et nature"
                />
                <OptionCard
                  selected={answers.experience === "paris"}
                  onClick={() => handleChange("experience", "paris")}
                  label="Élégance et raffinement"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">
                2. Votre période préférée ?
              </h3>
              <div className="grid gap-3 md:grid-cols-3">
                <OptionCard
                  selected={answers.period === "paris"}
                  onClick={() => handleChange("period", "paris")}
                  label="Histoire moderne (XIXe-XXe siècle)"
                />
                <OptionCard
                  selected={answers.period === "cretace"}
                  onClick={() => handleChange("period", "cretace")}
                  label="Temps anciens et origines"
                />
                <OptionCard
                  selected={answers.period === "florence"}
                  onClick={() => handleChange("period", "florence")}
                  label="Renaissance et classicisme"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">
                3. Vous préférez :
              </h3>
              <div className="grid gap-3 md:grid-cols-3">
                <OptionCard
                  selected={answers.preference === "paris"}
                  onClick={() => handleChange("preference", "paris")}
                  label="L'effervescence urbaine"
                />
                <OptionCard
                  selected={answers.preference === "cretace"}
                  onClick={() => handleChange("preference", "cretace")}
                  label="La nature sauvage"
                />
                <OptionCard
                  selected={answers.preference === "florence"}
                  onClick={() => handleChange("preference", "florence")}
                  label="L'art et l'architecture"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">
                4. Votre activité idéale :
              </h3>
              <div className="grid gap-3 md:grid-cols-3">
                <OptionCard
                  selected={answers.activity === "paris"}
                  onClick={() => handleChange("activity", "paris")}
                  label="Visiter des monuments"
                />
                <OptionCard
                  selected={answers.activity === "cretace"}
                  onClick={() => handleChange("activity", "cretace")}
                  label="Observer la faune"
                />
                <OptionCard
                  selected={answers.activity === "florence"}
                  onClick={() => handleChange("activity", "florence")}
                  label="Explorer des musées"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4 md:flex-row">
              <button
                onClick={() => setSubmitted(true)}
                disabled={!isComplete}
                className="rounded-xl bg-amber-500 px-6 py-3 font-semibold text-black transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Voir ma recommandation
              </button>

              <button
                onClick={resetQuiz}
                className="rounded-xl border border-amber-400/20 px-6 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Réinitialiser
              </button>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-amber-400/15 bg-zinc-900/80 p-8 text-center shadow-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-400">
              Destination recommandée
            </p>
            <h3 className="text-3xl font-bold md:text-4xl">
              {results[recommendation].title}
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
              {results[recommendation].description}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 md:flex-row">
              <button
                onClick={resetQuiz}
                className="rounded-xl border border-amber-400/20 px-6 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Refaire le quiz
              </button>
              <a
                href="#booking"
                className="rounded-xl bg-amber-500 px-6 py-3 font-semibold text-black transition hover:bg-amber-400"
              >
                Réserver cette destination
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function OptionCard({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border px-4 py-4 text-left transition ${
        selected
          ? "border-amber-400 bg-amber-500/10 text-white"
          : "border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-amber-400/40 hover:bg-zinc-800"
      }`}
    >
      {label}
    </button>
  );
}