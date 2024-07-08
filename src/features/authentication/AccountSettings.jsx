import SettingTop from "../SettingsPage/SettingTop";
import LeftColumn from "../SettingsPage/LeftColumn";
import RightColumn from "../SettingsPage/RightColumn";
import InputGroup from "../SettingsPage/InputGroup";
import TextareaGroup from "../SettingsPage/TextareaGroup";

const Preview = () => {
  return (
    <section className="relative flex items-start bg-gray-2 w-full min-h-screen">
      <div className="p-[30px]">
        <SettingTop
          title="Settings Page"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices lectus sem."
          button1="Cancel"
          button2="Save"
        />
        <div className="flex flex-wrap -mx-4">
          <LeftColumn title="Personal Information">
            <div className="px-3 w-full md:w-1/2">
              <InputGroup
                labelTitle="Full Name"
                type="text"
                value="Devid Jhon"
                placeholder="Devid Jhon"
                name
              />
            </div>
            <div className="px-3 w-full md:w-1/2">
              <InputGroup
                labelTitle="Phone Number"
                type="text"
                value="+990 3343 7865"
                placeholder="+990 3343 7865"
              />
            </div>
            <div className="px-3 w-full">
              <InputGroup
                labelTitle="Email Address"
                type="text"
                value="devidjhon24"
                placeholder="devidjhon24"
                email
              />
            </div>
            <div className="px-3 w-full">
              <InputGroup
                labelTitle="Username"
                type="text"
                value="devidjond45@gmail.com"
                placeholder="devidjond45@gmail.com"
                email
              />
            </div>
            <div className="px-3 w-full">
              <TextareaGroup
                labelTitle="BIO"
                placeholder="Write your BIO"
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam lacinia turpis tortor, consequat efficitur mi
                      congue a. Curabitur cursus, ipsum ut lobortis sodales,
                      enim arcu pellentesque lectus ac suscipit diam sem a
                      felis."
              />
            </div>
          </LeftColumn>
          <RightColumn
            title="Your Photo"
            subtitle="Edit your photo"
            img="https://cdn.tailgrids.com/2.0/image/assets/images/avatar/image-05.jpg"
          ></RightColumn>
        </div>
      </div>
    </section>
  );
};

export default Preview;
