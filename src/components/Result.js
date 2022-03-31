import ResultSection from './ResultSection';
import ResultItem from './ResultItem';

import '../styles/Result.css';
import isGeneralInfoProvided from '../modules/isGeneralInfoProvided';

export default function Result(props) {
  const { sections } = props;

  const isSkillsInfoProvided = sections.skills.length > 0;
  const isEducationInfoProvided = sections.education.length > 0;
  const isExperienceInfoProvided = sections.experience.length > 0;

  return (
    <div className="c-result" onSubmit={props.onSubmit}>
      {isGeneralInfoProvided(sections.general) && (
        <ResultSection heading="Personal information">
          {sections.general.map((resultItem, index) => {
            return (
              <div key={index} className="result-items-wrapper">
                <ResultItem
                  itemLabel="Full name:"
                  itemValue={resultItem.firstName + resultItem.lastName}
                />
                <ResultItem
                  itemLabel="Email:"
                  itemValue={resultItem.email}
                />
                <ResultItem
                  itemLabel="Phone:"
                  itemValue={resultItem.phone}
                />
              </div>
            );
          })}
        </ResultSection>
      )}
      {isSkillsInfoProvided && (
        <ResultSection heading="Skills">
          {sections.skills.map((resultItem, index) => {
            return (
              <ul
                key={index}
                className="result-items-wrapper result-items-wrapper--ul result-items-wrapper--skills"
              >
                <ResultItem list={true} itemValue={resultItem.skillInfo} />
              </ul>
            );
          })}
        </ResultSection>
      )}
      {isEducationInfoProvided && (
        <ResultSection heading="Education">
          {sections.education.map((resultItem, index) => {
            return (
              <ul key={index} className="result-items-wrapper">
                <ResultItem
                  itemLabel="School name:"
                  itemValue={resultItem.schoolName}
                  list={true}
                />
                <ResultItem
                  itemLabel="Title of study:"
                  itemValue={resultItem.titleOfStudy}
                  list={true}
                />
                <ResultItem
                  itemLabel="From:"
                  itemValue={resultItem.from}
                  list={true}
                />
                <ResultItem
                  itemLabel="To:"
                  itemValue={resultItem.to}
                  list={true}
                />
              </ul>
            );
          })}
        </ResultSection>
      )}
      {isExperienceInfoProvided && (
        <ResultSection heading="Experience">
          {sections.experience.map((resultItem, index) => {
            return (
              <div key={index} className="result-items-wrapper">
                <ResultItem
                  itemLabel="Company name:"
                  itemValue={resultItem.companyName}
                />
                <ResultItem
                  itemLabel="Position:"
                  itemValue={resultItem.position}
                />
                <ResultItem
                  itemLabel="Main tasks:"
                  itemValue={resultItem.mainTasks}
                />
                <ResultItem
                  itemLabel="From:"
                  itemValue={resultItem.from}
                />
                <ResultItem itemLabel="To:" itemValue={resultItem.to} />
              </div>
            );
          })}
        </ResultSection>
      )}
      <button className="c-result__edit-btn" onClick={props.onResultEdit}>
        Click to edit
      </button>
    </div>
  );
}
