import React from 'react';
import ResultSection from './ResultSection';
import ResultItem from './ResultItem';

class Result extends React.Component {
  render() {
    const { sections } = this.props;
    return (
      <div className="c-result" onSubmit={this.props.onSubmit}>
        {/* Everything except General information is 
        rendered conditionally if section's data is provided */}

        <ResultSection heading="General information">
          {sections.general.map((resultItem, index) => {
            return (
              <div key={index} className="result-items-wrapper">
                <ResultItem
                  itemLabel="First name:"
                  itemValue={resultItem.firstname}
                />
                <ResultItem
                  itemLabel="Last name:"
                  itemValue={resultItem.lastname}
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
        {sections.skills.length > 0 && (
          <ResultSection heading="Skills">
            {sections.skills.map((resultItem, index) => {
              return (
                <ul
                  key={index}
                  className="result-items-wrapper result-items-wrapper--ul"
                >
                  <ResultItem
                    list={true}
                    itemValue={resultItem.skillInfo}
                  />
                </ul>
              );
            })}
          </ResultSection>
        )}
        {sections.education.length > 0 && (
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
        {sections.experience.length > 0 && (
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
                  <button onClick={this.props.onResultEdit}>Edit</button>
                </div>
              );
            })}
          </ResultSection>
        )}
      </div>
    );
  }
}

export default Result;
