export interface TimelineItemType {
    name: string;
    description: string;
    dateStarted: Date;
    dateEnded: Date | "Present";
    role?: string;
    location?: string;
}

export const timelineItems: TimelineItemType[] = [
    {
      name: "Phrontistery",
      role: "Data Engineer",
      location: "Queens, NY",
      description: "Designed and implemented scalable data architectures and ETL pipelines using Spark, Hadoop, and Kafka. Built robust data models and monitoring strategies for clinical datasets.",
      dateStarted: new Date("2021-11"),
      dateEnded: "Present"
    },
    {
      name: "Infosys",
      role: "ASP.NET Full Stack Developer",
      location: "Remote",
      description: "Developed and maintained ASP.NET solutions and React components for Goldman Sachs in-house applications.",
      dateStarted: new Date("2021-01"),
      dateEnded: new Date("2021-11")
    },
    {
      name: "CNR Agency",
      role: "Computer Systems Administrator",
      location: "Staten Island, NY",
      description: "Managed on-premises servers, user access privileges, and firewall configurations. Digitized and transformed over 600,000 paper documents.",
      dateStarted: new Date("2016-07"),
      dateEnded: new Date("2019-10")
    },
    {
        name: "Makerstate",
        role: "After School Teacher",
        location: "Brooklyn, NY",
        description: "Taught elementary and middle school students the basics of computer science and programming.",
        dateStarted: new Date("2015-09"),
        dateEnded: new Date("2016-12.1")
    }
  ]