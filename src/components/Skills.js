import { useState } from "react";
import "../css/skills.css";
import { UilBracketsCurly } from "@iconscout/react-unicons";
import { UilAngleDown } from "@iconscout/react-unicons";
import { UilServerNetwork } from "@iconscout/react-unicons";
import { UilSwatchbook } from "@iconscout/react-unicons";

export default function Skills() {
  // const [skillsState, setSkillsState] = useState(false);
  const [showState0, setShowState0] = useState(false);
  const [showState1, setShowState1] = useState(false);
  const [showState2, setShowState2] = useState(false);

  const Skills0 = () => {
    setShowState0((showState0) => !showState0);
    setShowState1((showState1) => false);
    setShowState2((showState2) => false);
  };
  const Skills1 = () => {
    setShowState1((showState1) => !showState1);
    setShowState0((showState0) => false);
    setShowState2((showState2) => false);
  };
  const Skills2 = () => {
    setShowState2((showState2) => !showState2);
    setShowState0((showState0) => false);
    setShowState1((showState2) => false);
  };
  let toggleClassCheck0 = showState0 ? "skills__open" : "skills__close";
  let toggleClassCheck1 = showState1 ? "skills__open" : "skills__close";
  let toggleClassCheck2 = showState2 ? "skills__open" : "skills__close";

  return (
    <>
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div>
          {/* Skills 1 */}
          <div className={`skills__content ${toggleClassCheck0}`}>
            <div onClick={Skills0} className="skills__header">
              <UilBracketsCurly className="skills__icon" />

              <div>
                <h1 className="skills__title">Frontend developer</h1>
                <span className="skils__subtitle">More then 4 years</span>
              </div>

              <UilAngleDown className="skills__arrow" />
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">99%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">99%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills 2 */}
          <div className={`skills__content ${toggleClassCheck1}`}>
            <div onClick={Skills1} className="skills__header">
              <UilServerNetwork className="skills__icon" />

              <div>
                <h1 className="skills__title">Backend developer</h1>
                <span className="skils__subtitle">More then 2 years</span>
              </div>

              <UilAngleDown className="skills__arrow" />
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">PHP</h3>
                  <span className="skills__number">30%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__php"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Node Js</h3>
                  <span className="skills__number">95%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__node"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Firebase</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__firebase"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Python</h3>
                  <span className="skills__number">55%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__py"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Skills 3 */}
          <div className={`skills__content ${toggleClassCheck2}`}>
            <div onClick={Skills2} className="skills__header">
              <UilSwatchbook className="skills__icon" />

              <div>
                <h1 className="skills__title">Designer</h1>
                <span className="skils__subtitle">More then 2 years</span>
              </div>

              <UilAngleDown className="skills__arrow" />
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Figma</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__figma"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Sketch</h3>
                  <span className="skills__number">30%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__sketch"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Sketchbook</h3>
                  <span className="skills__number">30%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__sketchbook"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
