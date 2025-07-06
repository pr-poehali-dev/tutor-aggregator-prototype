import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-source">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary">TutorHub</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                Найти репетитора
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                Стать репетитором
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                О нас
              </a>
              <Button variant="outline" className="mr-2">
                Войти
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                Регистрация
              </Button>
            </nav>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold mb-6 text-foreground leading-tight">
                Найдите идеального
                <span className="text-primary block">репетитора</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Платформа для поиска квалифицированных репетиторов и размещения
                заявок на обучение. Более 5000 проверенных преподавателей готовы
                помочь вам достичь целей.
              </p>

              <Tabs defaultValue="search" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger
                    value="search"
                    className="flex items-center gap-2"
                  >
                    <Icon name="Search" className="h-4 w-4" />
                    Найти репетитора
                  </TabsTrigger>
                  <TabsTrigger
                    value="request"
                    className="flex items-center gap-2"
                  >
                    <Icon name="Plus" className="h-4 w-4" />
                    Разместить заявку
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="search" className="space-y-4">
                  <Card className="p-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите предмет" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="math">Математика</SelectItem>
                          <SelectItem value="physics">Физика</SelectItem>
                          <SelectItem value="chemistry">Химия</SelectItem>
                          <SelectItem value="english">
                            Английский язык
                          </SelectItem>
                          <SelectItem value="programming">
                            Программирование
                          </SelectItem>
                        </SelectContent>
                      </Select>

                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Формат занятий" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="online">Онлайн</SelectItem>
                          <SelectItem value="offline">У репетитора</SelectItem>
                          <SelectItem value="home">На дому</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Бюджет" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="500-1000">
                            500-1000 ₽/час
                          </SelectItem>
                          <SelectItem value="1000-2000">
                            1000-2000 ₽/час
                          </SelectItem>
                          <SelectItem value="2000-3000">
                            2000-3000 ₽/час
                          </SelectItem>
                          <SelectItem value="3000+">3000+ ₽/час</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                      <Icon name="Search" className="h-4 w-4 mr-2" />
                      Найти репетиторов
                    </Button>
                  </Card>
                </TabsContent>

                <TabsContent value="request" className="space-y-4">
                  <Card className="p-6">
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Предмет
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите предмет" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="math">Математика</SelectItem>
                              <SelectItem value="physics">Физика</SelectItem>
                              <SelectItem value="chemistry">Химия</SelectItem>
                              <SelectItem value="english">
                                Английский язык
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Бюджет за час
                          </label>
                          <Input placeholder="1500 ₽" />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Описание задачи
                        </label>
                        <Textarea placeholder="Опишите, что именно нужно изучить и какой результат хотите получить..." />
                      </div>

                      <Button className="w-full bg-secondary hover:bg-secondary/90">
                        <Icon name="Send" className="h-4 w-4 mr-2" />
                        Разместить заявку
                      </Button>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="animate-slide-up">
              <div className="relative">
                <img
                  src="/img/1d604c4c-8bde-4116-9523-5d327d2fe812.jpg"
                  alt="Репетитор с учеником"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Icon name="Users" className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">5000+</p>
                      <p className="text-sm text-muted-foreground">
                        Репетиторов
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tutors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Лучшие репетиторы</h3>
            <p className="text-lg text-muted-foreground">
              Проверенные преподаватели с высокими рейтингами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card
                key={i}
                className="hover-scale cursor-pointer transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">Анна Петрова</CardTitle>
                      <CardDescription>Математика, Физика</CardDescription>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-secondary/10 text-secondary hover:bg-secondary/20"
                    >
                      4.9 ⭐
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Опыт преподавания 8 лет. Подготовка к ЕГЭ и ОГЭ.
                    Индивидуальный подход к каждому ученику.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" className="h-4 w-4" />
                        156 уроков
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="MapPin" className="h-4 w-4" />
                        Онлайн
                      </span>
                    </div>
                    <p className="font-semibold text-primary">2000 ₽/час</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Показать всех репетиторов
              <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <p className="text-muted-foreground">Репетиторов</p>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-secondary mb-2">
                12000+
              </div>
              <p className="text-muted-foreground">Довольных учеников</p>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <p className="text-muted-foreground">Предметов</p>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">4.8</div>
              <p className="text-muted-foreground">Средний рейтинг</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Готовы начать обучение?</h3>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к тысячам учеников, которые уже достигли своих целей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-primary">
              Найти репетитора
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Стать репетитором
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" className="h-6 w-6 text-primary" />
                <h4 className="font-bold text-lg">TutorHub</h4>
              </div>
              <p className="text-muted-foreground">
                Платформа для поиска репетиторов и размещения заявок на обучение
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Для учеников</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Найти репетитора
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Разместить заявку
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Отзывы
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Для репетиторов</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Стать репетитором
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Личный кабинет
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Помощь
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Связь с нами</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  info@tutorhub.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  +7 (495) 123-45-67
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 TutorHub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
