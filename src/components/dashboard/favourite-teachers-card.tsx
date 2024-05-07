import { getStudentFavoriteTeachers } from '@/lib/student/queries'
import { HeartOff } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Divider } from '../ui/divider'

interface Props {
  id: number
}

export async function FavouriteTeachersCard({ id }: Props) {
  const favouriteTeachers = await getStudentFavoriteTeachers(id)

  return (
    <div className="flex flex-col gap-4 rounded-md border bg-background p-6">
      <h2 className="text-2xl font-semibold">Favourite Teachers</h2>

      {favouriteTeachers.length > 0 ? (
        <>
          {favouriteTeachers.map((teacher) => (
            <div key={teacher.id} className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="flex w-full items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    {teacher.name} {teacher.surname}
                  </h3>

                  <div className="flex items-center gap-6">
                    <span className="text-foreground/80">
                      Subject: <Badge>{teacher.subjects.at(0)?.name}</Badge>
                    </span>

                    <span className="text-foreground/80">
                      Languages:{' '}
                      <span className="space-x-2">
                        {teacher.languages.split(',').map((language) => (
                          <Badge className="capitalize" variant="secondary" key={language}>
                            {language}
                          </Badge>
                        ))}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <Divider />
            </div>
          ))}
        </>
      ) : (
        <div className="flex flex-col items-center gap-3 opacity-45">
          <HeartOff className="text-primary dark:text-foreground" size={40} />

          <span className="text-foreground">No Teachers</span>
        </div>
      )}
    </div>
  )
}
