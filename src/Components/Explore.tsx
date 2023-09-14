import React, { useState } from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Tab = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  padding: 10px 20px;
  background-color: ${(props) => (props.isActive ? '#00c8ff' : '#FFFFFF')};
  color: ${(props) => (props.isActive ? '#fff' : '#000')};
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ImageCard = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const ArtistName = styled.div`
  margin-top: auto;
  font-weight: bold;
`;

const Explore: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Artists');

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const images = [
    "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT5Kgg1RnlEarSfN2dSR6lxFxG1vS5QtLdnnqBPTiFaNDVm4CTX_v9SP4SzbquTqKQIIlUEnTZTxxzDwS8",
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT5Kgg1RnlEarSfN2dSR6lxFxG1vS5QtLdnnqBPTiFaNDVm4CTX_v9SP4SzbquTqKQIIlUEnTZTxxzDwS8",

      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT5Kgg1RnlEarSfN2dSR6lxFxG1vS5QtLdnnqBPTiFaNDVm4CTX_v9SP4SzbquTqKQIIlUEnTZTxxzDwS8",
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT5Kgg1RnlEarSfN2dSR6lxFxG1vS5QtLdnnqBPTiFaNDVm4CTX_v9SP4SzbquTqKQIIlUEnTZTxxzDwS8",
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT5Kgg1RnlEarSfN2dSR6lxFxG1vS5QtLdnnqBPTiFaNDVm4CTX_v9SP4SzbquTqKQIIlUEnTZTxxzDwS8",
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT5Kgg1RnlEarSfN2dSR6lxFxG1vS5QtLdnnqBPTiFaNDVm4CTX_v9SP4SzbquTqKQIIlUEnTZTxxzDwS8",

      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT5Kgg1RnlEarSfN2dSR6lxFxG1vS5QtLdnnqBPTiFaNDVm4CTX_v9SP4SzbquTqKQIIlUEnTZTxxzDwS8",
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT5Kgg1RnlEarSfN2dSR6lxFxG1vS5QtLdnnqBPTiFaNDVm4CTX_v9SP4SzbquTqKQIIlUEnTZTxxzDwS8"
  ];

  return (
    <div>
      <TabsContainer>
        <Tab
          isActive={activeTab === 'Artists'}
          onClick={() => handleTabClick('Artists')}
        >
          Artists
        </Tab>
        <Tab
          isActive={activeTab === 'Styles'}
          onClick={() => handleTabClick('Styles')}
        >
          Styles
        </Tab>
        <Tab
          isActive={activeTab === 'Reference'}
          onClick={() => handleTabClick('Reference')}
        >
          Reference
        </Tab>
      </TabsContainer>
      {/* Conditional rendering of images based on the active tab */}
      {activeTab === 'Artists' && (
        <GridContainer>
          {images.map((img, index) => (
            <ImageCard key={index} image={img}>
              <ArtistName>Artist Name</ArtistName>
            </ImageCard>
          ))}
        </GridContainer>
      )}

      {activeTab === 'Styles' && (
        <div>
          {/* Add images for the Styles tab */}
        </div>
      )}

      {activeTab === 'Reference' && (
        <div>
          {/* Add images for the Reference tab */}
        </div>
      )}
    </div>
  );
};

export default Explore;
