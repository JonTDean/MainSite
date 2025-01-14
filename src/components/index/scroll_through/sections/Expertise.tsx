export function Expertise() {
  return (
    <section className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8">Areas of Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Data Engineering</h3>
          <p className="text-muted-foreground">
            Building scalable data pipelines and ETL processes using Spark, Hadoop,
            and modern data frameworks.
          </p>
        </div>
        {/* Add more expertise areas */}
      </div>
    </section>
  )
} 