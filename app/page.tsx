// app/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Server, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
          Studio Cloud Request Platform
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Streamline your cloud resource requests with our intuitive platform. 
          Manage, track, and approve cloud infrastructure requests effortlessly.
        </p>
        <div className="mt-8 space-x-4">
          <Button variant="default">Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Cloud Requests</CardTitle>
            <Cloud className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p>Submit and manage cloud infrastructure requests seamlessly.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Resource Management</CardTitle>
            <Server className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p>Track and optimize your cloud resource allocation.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Team Collaboration</CardTitle>
            <Users className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p>Collaborate efficiently with team-wide request visibility.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
