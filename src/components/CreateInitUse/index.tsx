import CreateInitUseSection from './CreateInitUseSection';
import CreateCode from './CreateCode.mdx';
import InitCode from './InitCode.mdx';
import UseCode from './UseCode.mdx';

const CreateInitUse = () => {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto max-w-screen-2xl">
        <CreateInitUseSection
          title="Create"
          description="Create a static class and define API endpoints with decorators"
          number={1}
        >
          <CreateCode />
        </CreateInitUseSection>
        <CreateInitUseSection
          title="Init"
          description="Initialise the controller at Next.js Optional Catch-all Segment"
          number={2}
        >
          <InitCode />
        </CreateInitUseSection>
        <CreateInitUseSection
          title="Use"
          description='Import the auto-generated fetching library from "vovk-client"'
          number={3}
        >
          <UseCode />
        </CreateInitUseSection>
      </div>
    </div>
  );
};

export default CreateInitUse;
