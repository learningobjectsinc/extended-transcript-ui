export default {
  "@id" : "https://demo-et.difference-engine.com/transcript/2d96f6bf-eba0-44a7-a4a6-710a42117bb2",
  "created_at" : "2016-05-23T16:16:22.803Z",
  "progress" : [ {
    "@id" : "https://demo-et.difference-engine.com/program/6482bb6a-eae4-43d5-b2c7-825bbb361529",
    "completed" : false,
    "towards" : {
      "@id" : "https://demo-et.difference-engine.com/program/10011616",
      "title" : "Test Program 1",
      "@type" : "Program"
    },
    "@type" : "Progress"
  }, {
    "@id" : "https://demo-et.difference-engine.com/courseSection/6f1a2d18-a932-42de-ac88-8253a96ba667",
    "completed" : false,
    "towards" : {
      "@id" : "https://demo-et.difference-engine.com/courseSection/tech-soln-1-s1",
      "title" : "Technology Solutions in Health Care - Section 1",
      "@type" : "CourseSection"
    },
    "contexts" : [ {
      "@id" : "https://demo-et.difference-engine.com/program/10011616",
      "title" : "Test Program 1",
      "@type" : "Program"
    } ],
    "@type" : "Progress"
  }, {
    "@id" : "https://demo-et.difference-engine.com/competency/93590732-44f0-4651-a4ac-22b4f2a8c0d2",
    "completed" : true,
    "towards" : {
      "@id" : "https://demo-et.difference-engine.com/competency/capability2a",
      "code" : "capability2a",
      "statement" : "Capability 2a",
      "parent" : {
        "@id" : "https://demo-et.difference-engine.com/competency/capability2",
        "code" : "capability2",
        "statement" : "Capability 2",
        "@type" : "Competency"
      },
      "@type" : "Competency"
    },
    "achievement_level" : {
      "@id" : "https://demo-et.difference-engine.com/achievementLevel/Proficient",
      "level" : "Proficient",
      "@type" : "AchievementLevel"
    },
    "date_completed" : "2016-05-22T00:43:41.349Z",
    "contexts" : [ {
      "@id" : "https://demo-et.difference-engine.com/courseSection/tech-soln-1-s1",
      "title" : "Technology Solutions in Health Care - Section 1",
      "@type" : "CourseSection"
    } ],
    "@type" : "Progress"
  }, {
    "@id" : "https://demo-et.difference-engine.com/competency/2469f159-fbf0-435b-8efe-45f3365ed0cc",
    "completed" : true,
    "towards" : {
      "@id" : "https://demo-et.difference-engine.com/competency/capability1b",
      "code" : "capability1b",
      "statement" : "Capability 1b",
      "parent" : {
        "@id" : "https://demo-et.difference-engine.com/competency/capability1",
        "code" : "capability1",
        "statement" : "Capability 1",
        "@type" : "Competency"
      },
      "@type" : "Competency"
    },
    "achievement_level" : {
      "@id" : "https://demo-et.difference-engine.com/achievementLevel/Mastered",
      "level" : "Mastered",
      "@type" : "AchievementLevel"
    },
    "date_completed" : "2016-05-22T00:43:41.349Z",
    "contexts" : [ {
      "@id" : "https://demo-et.difference-engine.com/courseSection/tech-soln-1-s1",
      "title" : "Technology Solutions in Health Care - Section 1",
      "@type" : "CourseSection"
    } ],
    "@type" : "Progress"
  }, {
    "@id" : "https://demo-et.difference-engine.com/competency/0efd6600-9294-47c9-a947-d90de153c128",
    "completed" : true,
    "towards" : {
      "@id" : "https://demo-et.difference-engine.com/competency/capability1a",
      "code" : "capability1a",
      "statement" : "Capability 1a",
      "parent" : {
        "@id" : "https://demo-et.difference-engine.com/competency/capability1",
        "code" : "capability1",
        "statement" : "Capability 1",
        "@type" : "Competency"
      },
      "@type" : "Competency"
    },
    "achievement_level" : {
      "@id" : "https://demo-et.difference-engine.com/achievementLevel/Basic",
      "level" : "Basic",
      "@type" : "AchievementLevel"
    },
    "date_completed" : "2016-05-22T00:43:41.349Z",
    "contexts" : [ {
      "@id" : "https://demo-et.difference-engine.com/courseSection/tech-soln-1-s1",
      "title" : "Technology Solutions in Health Care - Section 1",
      "@type" : "CourseSection"
    } ],
    "@type" : "Progress"
  }, {
    "@id" : "https://demo-et.difference-engine.com/competency/0027a173-7398-4192-ab20-54dafdb85c98",
    "completed" : false,
    "towards" : {
      "@id" : "https://demo-et.difference-engine.com/competency/capability2",
      "code" : "capability2",
      "statement" : "Capability 2",
      "children" : [ {
        "@id" : "https://demo-et.difference-engine.com/competency/capability2a",
        "code" : "capability2a",
        "statement" : "Capability 2a",
        "@type" : "Competency"
      }, {
        "@id" : "https://demo-et.difference-engine.com/competency/capability2b",
        "code" : "capability2b",
        "statement" : "Capability 2b",
        "@type" : "Competency"
      } ],
      "@type" : "Competency"
    },
    "achievement_level" : {
      "@id" : "https://demo-et.difference-engine.com/achievementLevel/Incomplete",
      "level" : "Incomplete",
      "@type" : "AchievementLevel"
    },
    "contexts" : [ {
      "@id" : "https://demo-et.difference-engine.com/courseSection/tech-soln-1-s1",
      "title" : "Technology Solutions in Health Care - Section 1",
      "@type" : "CourseSection"
    } ],
    "@type" : "Progress"
  }, {
    "@id" : "https://demo-et.difference-engine.com/competency/67eb3853-9ec8-4a00-abdc-8cccf18f38be",
    "completed" : true,
    "towards" : {
      "@id" : "https://demo-et.difference-engine.com/competency/capability1",
      "code" : "capability1",
      "statement" : "Capability 1",
      "children" : [ {
        "@id" : "https://demo-et.difference-engine.com/competency/capability1a",
        "code" : "capability1a",
        "statement" : "Capability 1a",
        "@type" : "Competency"
      }, {
        "@id" : "https://demo-et.difference-engine.com/competency/capability1b",
        "code" : "capability1b",
        "statement" : "Capability 1b",
        "@type" : "Competency"
      } ],
      "@type" : "Competency"
    },
    "achievement_level" : {
      "@id" : "https://demo-et.difference-engine.com/achievementLevel/Proficient",
      "level" : "Proficient",
      "@type" : "AchievementLevel"
    },
    "contexts" : [ {
      "@id" : "https://demo-et.difference-engine.com/courseSection/tech-soln-1-s1",
      "title" : "Technology Solutions in Health Care - Section 1",
      "@type" : "CourseSection"
    } ],
    "@type" : "Progress"
  } ],
  "organization" : {
    "@id" : "https://demo-et.difference-engine.com/organization/10004447",
    "legal_name" : "Atlas University",
    "website" : "https://demo-et.difference-engine.com",
    "@type" : "Organization"
  },
  "user" : {
    "@id" : "https://demo-et.difference-engine.com/user/student1",
    "email" : "student1@example.edu",
    "familyName" : "Student",
    "middleName" : "",
    "givenName" : "Jane",
    "@type" : "Person"
  },
  "@type" : "RecordOfPerformance",
  "@context" : {
    "@vocab" : "http://purl.kinexis.com:8888/ctx/cbe/v1/record_of_performance/"
  }
};
