import React from "react";
import {
  DivWBorderWrapper,
  ListWrapper,
  SectionHeading,
  SectionWrapper,
  Tag,
} from "@/components/common";
import { IExperience } from "@/interface/experience";

interface ExperienceProps {
  experiences: IExperience[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => (
  <SectionWrapper>
    <SectionHeading heading="Experience" fontColor="#0a0a0a" />
    <div className="space-y-8">
      {experiences.map((experience, index) => {
        const {
          companyName,
          desc,
          duration,
          location,
          tagBgColors,
          tags,
          title,
        } = experience;

        return (
          <DivWBorderWrapper key={`exp-${index}`}>
            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <p className="text-base font-medium">{companyName}</p>
                <p className="text-sm text-gray-600">{duration}</p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                  <p className="text-base font-medium">{title}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                      <Tag
                        label={tag}
                        tagProps={{
                          style: {
                            backgroundColor: tagBgColors[i],
                          },
                        }}
                        key={`exp-${index}-tag-${i}`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600">{location}</p>

                <ListWrapper
                  liProps={{
                    className: "text-base leading-relaxed",
                  }}
                >
                  {desc.map((item, i) => (
                    <li
                      key={`desc-${index}-${i}`}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </ListWrapper>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-12 md:gap-8">
              <div className="col-span-4 flex flex-col gap-2">
                <div>
                  <p className="text-base font-medium mb-1">{companyName}</p>
                  <p className="text-sm text-gray-600">{duration}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <Tag
                      label={tag}
                      tagProps={{
                        style: {
                          backgroundColor: tagBgColors[i],
                        },
                      }}
                      key={`exp-${index}-tag-${i}`}
                    />
                  ))}
                </div>
              </div>
              <div className="col-span-8 flex flex-col gap-2">
                <div>
                  <p className="text-base font-medium mb-1">{title}</p>
                  <p className="text-sm text-gray-600">{location}</p>
                </div>
                <ListWrapper
                  liProps={{
                    className: "text-base leading-relaxed",
                  }}
                >
                  {desc.map((item, i) => (
                    <li
                      key={`desc-${index}-${i}`}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </ListWrapper>
              </div>
            </div>
          </DivWBorderWrapper>
        );
      })}
    </div>
  </SectionWrapper>
);

export default Experience;
