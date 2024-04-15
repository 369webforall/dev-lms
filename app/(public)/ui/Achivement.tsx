// Achievement.js or Achievement.tsx

import React from "react";

const Achievement = () => {
  return (
    <div className="bg-white container mx-auto my-4 shadow-md rounded-lg p-6">
  <div className="flex flex-col space-y-2">
    <p>
      <strong>Why you should join e5code:</strong>
    </p>
    <ul className="list-disc ml-6">
      <li>Every topic is covered in detail; we focus on what matters.</li>
      <li>We do enough revision to master the topics and ensure students can complete the projects.</li>
      <li>All class details, study materials, and video recordings will be shared in the chatroom (Slack).</li>
      <li>For any revisions, students are always welcome to request them in the chat.</li>
      <li>We have 5 classes weekly for an hour. You&#39;ll receive recorded videos for revision and in case you miss an online class.</li>
      <li>Lifetime access to e5code online coaching center.</li>
      <li>Preparedness to apply for Frontend and Backend development jobs.</li>
      <li>Proficiency in DevOps practices, making you advantageous in job applications.</li>
      <li>Networking opportunities and community support from e5code.</li>
      <li>Any new course we introduce in the future will be accessible to all our students for free. For example, Ruby, Ruby on Rails.</li>
    </ul>
  </div>
</div>

  );
};

export default Achievement;
