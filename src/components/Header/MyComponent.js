import { RibbonContainer,  RightCornerRibbon } from "react-ribbons";

const MyComponent = () => (
    <RibbonContainer className="custom-class">
        <RightCornerRibbon backgroundColor="#0088ff" color="#f0f0f0" fontFamily="Arial">
            Foo Bar
        </RightCornerRibbon>
        Lorem ipsum...
    </RibbonContainer>
);

export default MyComponent;